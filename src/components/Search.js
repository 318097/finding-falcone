import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

import Card from "./Card";
import AlertBox from "./AlertBox";

import { getToken, setToken, extractNames } from "../utils";

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

/* Total no of destinations available for searching at a time */
const totalDestinations = Array(4).fill(0);

const Search = ({ history }) => {
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const [selectedPlanets, setSelectedPlanets] = useState({});
  const [selectedVehicles, setSelectedVehicles] = useState({});

  const [totalTime, setTotalTime] = useState(0);

  const [disableSubmitButton, setDisableSubmitButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertBoxStatus, setAlertBoxStatus] = useState(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      const { data } = await axios.get(`/planets`);
      setPlanets(data);
    };

    const fetchVehicles = async () => {
      const { data } = await axios.get(`/vehicles`);
      setVehicles(data);
    };

    const fetchToken = async () => {
      const {
        data: { token }
      } = await axios.post(
        `/token`,
        {},
        {
          headers: {
            Accept: "application/json"
          }
        }
      );

      setToken(token);
      fetchPlanets();
      fetchVehicles();
    };

    fetchToken();
  }, []);

  useEffect(() => {
    const calculateTotalTime = () => {
      let total = 0;
      totalDestinations.forEach((_, index) => {
        const vehicle = selectedVehicles[`input${index + 1}`];
        const planet = selectedPlanets[`input${index + 1}`];

        if (vehicle && planet) total += planet.distance / vehicle.speed;
      });
      setTotalTime(total);
    };

    calculateTotalTime();
  }, [selectedPlanets, selectedVehicles]);

  useEffect(() => {
    const disableSubmitButtonStatus = totalDestinations.reduce(
      (acc, _, index) => acc || !selectedVehicles[`input${index + 1}`],
      false
    );
    setDisableSubmitButton(disableSubmitButtonStatus);
  }, [selectedVehicles]);

  const setData = (type, key, value) => {
    if (type === "PLANETS")
      setSelectedPlanets(data => ({ ...data, [key]: value }));
    else setSelectedVehicles(data => ({ ...data, [key]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setDisableSubmitButton(true);
    try {
      const inputData = {
        token: getToken(),
        planet_names: extractNames(selectedPlanets),
        vehicle_names: extractNames(selectedVehicles)
      };

      const { data } = await axios.post("/find", inputData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });

      const query = queryString.stringify({
        planetName: data.planet_name,
        totalTime,
        success: data.status
      });
      history.push(`/results?${query}`);
    } catch (err) {
      setAlertBoxStatus("Error: Refresh page or try again later.");
      setTimeout(() => setAlertBoxStatus(null), 3000);
    } finally {
      setLoading(false);
      setDisableSubmitButton(false);
    }
  };

  return (
    <Fragment>
      {alertBoxStatus && <AlertBox message={alertBoxStatus} />}
      <section>
        <h4>Select the planets you want to search in:</h4>
        <CardWrapper>
          {totalDestinations.map((_, index) => {
            const inputNo = index + 1;

            const availablePlanets = planets.filter(planet => {
              const unavailablePlanets = extractNames(selectedPlanets);
              if (
                selectedPlanets[`input${inputNo}`] &&
                selectedPlanets[`input${inputNo}`]["name"] === planet.name
              )
                return true;

              if (unavailablePlanets.includes(planet.name)) return false;

              return true;
            });

            const availableVehicles = vehicles.map(vehicle => {
              let totalQuantityUsed = 0;
              for (let i = 1; i <= inputNo; i++) {
                if (
                  selectedVehicles[`input${i}`] &&
                  selectedVehicles[`input${i}`]["name"] === vehicle.name
                )
                  totalQuantityUsed++;
              }

              return {
                ...vehicle,
                total_no: vehicle.total_no - totalQuantityUsed
              };
            });

            return (
              <Card
                key={inputNo}
                id={inputNo}
                planets={availablePlanets}
                selectedPlanet={selectedPlanets[`input${inputNo}`]}
                vehicles={availableVehicles}
                selectedVehicle={selectedVehicles[`input${inputNo}`]}
                setData={setData}
              />
            );
          })}
        </CardWrapper>
        <br />
        <p className="bold">Time taken: {totalTime}</p>
        <button
          disabled={disableSubmitButton}
          className="paper-btn btn-success"
          onClick={handleSubmit}
        >
          <span>Find Falcone</span>
          {loading && <div className="loader"></div>}
        </button>
      </section>
    </Fragment>
  );
};

export default withRouter(Search);
