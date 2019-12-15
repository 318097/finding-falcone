import React from 'react';
import { withRouter } from 'react-router-dom';

const Results = ({ history, timeTaken, planet }) => {
  return (
    <div>
      <div>
        Success! Congratulations on Finding Falcone. King Shat is mighty pleased.
      <span>Time taken: {timeTaken}</span>
        <span>Planet found: {planet}</span>
      </div>
      <button onClick={() => history.push('/home')}>Start Again</button>
    </div>
  );
};

export default withRouter(Results);
