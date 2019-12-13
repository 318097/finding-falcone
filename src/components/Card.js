import React, { useState } from 'react';

const Card = ({ index, planets = [], vehicles = [] }) => {
  const [showVehicles, setShowVehicles] = useState(false);

  return (
    <div className="card">
      <div className="card-body">
        <h4>Destination {index + 1}</h4>
        <select>
          {planets.map(({ name }) => <option key={name} value={name}>{name}</option>)}
        </select>
        {
          showVehicles && (
            <div>
              {
                vehicles.map((vehicle) => {
                  const { name, total_no, max_distance, speed } = vehicle;
                  return (
                    <label
                      key={name}
                      for={`radio${index}`}
                      className="paper-radio"
                    >
                      <input
                        type="radio"
                        name={`paperRadio${index}`}
                        id={`radio${index}`}
                        value={name}
                      />
                      <span>{name}({total_no})</span>
                    </label>
                  )
                })
              }
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Card;
