import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const noOfCards = Array(4).fill(0);

const Home = () => {
  const handleClick = () => { };

  return (
    <section>
      <h3>Select the planets you want to search in:</h3>
      <CardWrapper>
        {noOfCards.map((item, index) => <Card key={index} index={index} />)}
      </CardWrapper>
      <button className="submit-button" onClick={handleClick}>Find Falcone</button>
    </section>
  );
};

export default Home;
