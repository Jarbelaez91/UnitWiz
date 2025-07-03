import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import areaIcon from './area.png';
import dataIcon from './data.png';
import lengthIcon from './length.png';
import powerIcon from './power.png';
import speedIcon from './speed1.png';
import thermometerIcon from './thermometer.png';
import timeIcon from './time.png';
import volumeIcon from './volume.png';
import weightIcon from './weight.png';

const HomePage = () => {
  const units = [
    { name: 'Area', icon: areaIcon }, 
    { name: 'Data', icon: dataIcon }, 
    { name: 'Length', icon: lengthIcon }, 
    { name: 'Power', icon: powerIcon }, 
    { name: 'Speed', icon: speedIcon }, 
    { name: 'Temperature', icon: thermometerIcon },
    { name: 'Time' , icon: timeIcon}, 
    { name: 'Volume', icon: volumeIcon }, 
    { name: 'Weight', icon: weightIcon }
  ];

  return (
    <div>
      <div className='title-con'>
      <h1 className= "title">UnitWiz</h1>
      </div>
      <div className="card-container">
        {units.map((unit, index) => (
          <Link key={index} to={`/${unit.name.toLowerCase()}`} style={{ textDecoration: 'none' }}>
            <div className="card">
              {unit.icon && <img className ="icon-img" src={unit.icon} alt={unit.name} />}
              <h2>{unit.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
