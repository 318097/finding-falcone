import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

const Results = ({ history, location }) => {
  const [result, setResult] = useState({});

  useEffect(() => {
    const queryResults = queryString.parse(location.search);
    setResult(queryResults);
  }, [location]);
  return (
    <section>
      {
        result.success ?
          (
            <div>
              <p>
                Success! Congratulations on Finding Falcone. King Shan is mighty pleased.
              </p>
              <span>Time taken: {result.totalTime}</span><br />
              <span>Planet found: {result.planetName}</span>
            </div>
          ) : (
            <div>
              <p>Failed! Could not find Falcone in targeted destinations.</p>
            </div>
          )
      }

      <br />
      <button onClick={() => history.push('/home')}>Start Again</button>
    </section>
  );
};

export default withRouter(Results);
