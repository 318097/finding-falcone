import React, { useState } from 'react';

const Card = ({ id, planets = [], vehicles = [], setData }) => {
  const [showVehicles, setShowVehicles] = useState(false);

  const handlePlanetSelect = ({ target: { value } }) => {
    setData('PLANETS', `input${id}`, value);
    setShowVehicles(true);
  };

  const handleVehicleSelect = ({ target: { value } }) => {
    setData('VEHICLES', `input${id}`, value);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4>Destination {id}</h4>
        <select onChange={handlePlanetSelect}>
          {planets.map(({ name }) => <option key={name} value={name}>{name}</option>)}
        </select>
        {
          showVehicles && (
            <div style={{ marginTop: '15px' }}>
              {
                vehicles.map((vehicle, index) => {
                  const { name, total_no, max_distance, speed } = vehicle;
                  return (
                    <label
                      key={name}
                      htmlFor={`radio${id}${index}`}
                      className="paper-radio"
                      style={{ display: 'block', textAlign: 'left' }}
                    >
                      <input
                        onChange={handleVehicleSelect}
                        style={{ display: 'inline' }}
                        type="radio"
                        name={`paperRadio${id}`}
                        id={`radio${id}${index}`}
                        value={name}
                      />
                      {name}({total_no})
                    </label>
                  );
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
