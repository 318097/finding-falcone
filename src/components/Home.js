import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import Card from './Card';

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const noOfCards = Array(4).fill(0);

const Home = ({ history }) => {
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const [selectedPlanets, setSelectedPlanets] = useState({});
  const [selectedVehicles, setSelectedVehicles] = useState({});

  const setData = (type, key, value) => {
    if (type === 'PLANETS')
      setSelectedPlanets(data => ({ ...data, [key]: value }));
    else
      setSelectedVehicles(data => ({ ...data, [key]: value }));
    setTimeout(() => console.log(selectedPlanets, selectedVehicles), 1000);
  }

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
      const { data: { token } } = await axios.post(`/token`, {}, {
        headers: {
          Accept: 'application/json'
        }
      });

      fetchPlanets();
      fetchVehicles();
    };

    fetchToken();
  }, []);

  const handleClick = () => history.push(`/results`);

  return (
    <section>
      <h3>Select the planets you want to search in:</h3>
      <CardWrapper>
        {noOfCards.map((item, index) => {
          return (
            <Card
              key={index}
              id={index + 1}
              vehicles={vehicles}
              planets={planets}
              setData={setData}
            />
          )
        })}
      </CardWrapper>
      <button className="submit-button paper-btn btn-primary" onClick={handleClick}>Find Falcone</button>
    </section>
  );
};

export default withRouter(Home);
