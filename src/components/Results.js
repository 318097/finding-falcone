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
        (!result.success || result.success === 'false') ?
          (
            <div>
              <p>Failed! Could not find Falcone in targeted destinations.</p>
            </div>
          ) :
          (
            <div>
              <p>
                Success! Congratulations on Finding Falcone. King Shan is mighty pleased.
              </p>
              <span className="bold">Time taken: <span className="success">{result.totalTime}</span></span><br />
              <span className="bold">Planet found: <span className="success">{result.planetName}</span></span>
            </div>
          )
      }

      <br />
      <button className="btn-success" onClick={() => history.push('/home')}>Start Again</button>
    </section>
  );
};

export default withRouter(Results);
