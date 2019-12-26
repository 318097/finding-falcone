import React, { useState } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: white;
  margin: 10px;
  padding: 10px;
  height: 275px;
  select {
    margin: 0 auto;
  }
  label {
    display: block;
    text-align: left;
    input[type="radio"] {
      display: inline;
      margin-right: 5px;
    }
  }
`;

const Card = ({
  id,
  planets = [],
  selectedPlanet = { name: "default", distance: null },
  vehicles = [],
  selectedVehicle = { name: null },
  setData
}) => {
  const [showVehicleOptions, setShowVehicleOptions] = useState(false);

  const handlePlanetSelect = ({ target: { value } }) => {
    const result = planets.find(planet => planet.name === value);
    setData("PLANETS", `input${id}`, result);
    setShowVehicleOptions(true);
  };

  const handleVehicleSelect = ({ target: { value } }) => {
    const result = vehicles.find(vehicle => vehicle.name === value);
    setData("VEHICLES", `input${id}`, result);
  };

  return (
    <CardWrapper className="card">
      <div className="card-body">
        <h4>Destination {id}</h4>

        <select
          value={selectedPlanet.name}
          placeholder="Select Planet"
          onChange={handlePlanetSelect}
        >
          <option disabled value="default">
            Select
          </option>
          {planets.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        <br />
        {showVehicleOptions && (
          <div>
            {vehicles.map((vehicle, index) => {
              const { name, total_no, max_distance } = vehicle;
              const disableRadioButton =
                (selectedVehicle.name !== vehicle.name && total_no <= 0) ||
                selectedPlanet.distance > max_distance;

              return (
                <label
                  key={name}
                  htmlFor={`radio${id}${index}`}
                  className="paper-radio"
                >
                  <input
                    disabled={disableRadioButton}
                    onChange={handleVehicleSelect}
                    type="radio"
                    name={`paperRadio${id}`}
                    id={`radio${id}${index}`}
                    value={name}
                  />
                  <span
                    className={`${disableRadioButton &&
                      "disable-radio-button"}`}
                  >
                    {name}({Math.max(0, total_no)})
                  </span>
                </label>
              );
            })}
          </div>
        )}
      </div>
    </CardWrapper>
  );
};

export default Card;
