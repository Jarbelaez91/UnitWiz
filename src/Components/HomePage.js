// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const units = ['Area', 'Data', 'Length', 'Power', 'Speed', 'Temperature', 'Time', 'Volume', 'Weight'];

  return (
    <div>
      <h1>Unit Converter</h1>
      <div className="card-container">
        {units.map((unit, index) => (
          <div key={index} className="card">
            <Link to={`/${unit.toLowerCase()}`}>
              <h2>{unit}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
