import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './TimeCon.css';

function Power (){

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
      navigate('/');
    };

    const [leftUnit, setLeftUnit] = useState ('watt');
    const [rightUnit, setRightUnit] = useState ('kilowatt')
    const [inputValue, setInputValue] = useState ('')
    const [convertedValue, setConvertedValue] = useState ('');

    const handleInputChange = (value) => {
        setInputValue (value);
        convertPower (value, leftUnit , rightUnit)
    }

    const handleLeftUnitChange = (unit) => {
        setLeftUnit (unit)
        convertPower(inputValue, unit, rightUnit)
    };

    const handleRightUnitChange = (unit) =>{
        setRightUnit (unit)
        convertPower (inputValue,leftUnit, unit)
    }

    const convertPower = (value, fromUnit,toUnit) =>{
        if (!value.trim()) {
      setConvertedValue('');
      return;
        }

    let convertedPower;
        if (fromUnit === 'btu/h') {
            if(toUnit === 'horse power') {
                convertedPower = (value) / 2509.626768;
            } else if (toUnit === 'kilowatt'){
                convertedPower = (value) / 3412.14632
            } else if (toUnit === 'watt'){
                convertedPower = (value) * 0.2930710703
            } else if (toUnit === 'ton of refrigeration') {
                convertedPower = (value) /12000
            } else if (toUnit === 'btu/h') {
                convertedPower = parseFloat(value)
            } 

        } else if (fromUnit === 'horse power'){
            if (toUnit === 'btu/h'){
                convertedPower = (value) * 2509.626768;
            } else if (toUnit === 'kilowatt') {
                convertedPower = (value) * 0.7354990028
            } else if (toUnit === 'watt'){
                convertedPower = (value) * 735.4990028
            } else if (toUnit === 'ton of refrigeration'){
                convertedPower = (value) * .2091355641
            } else if (toUnit === 'horse power'){
                convertedPower = parseFloat(value)
            }


        } else if (fromUnit === 'kilowatt') {
            if (toUnit === 'btu/h') {
                convertedPower = (value) * 3412.141632
            } else if (toUnit === 'horse power') {
                convertedPower = (value) / 0.7354990028
            } else if (toUnit === 'watt') {
                convertedPower = (value) * 1000
            } else if (toUnit === 'ton of refrigeration'){
                convertedPower = (value) * .2843451361
            } else if (toUnit === 'kilowatt'){
                convertedPower = parseFloat(value)
            }

        } else if (fromUnit === 'watt') {
            if (toUnit === 'btu/h'){
                convertedPower = (value) / 0.2930710703
            } else if (toUnit === 'horse power'){
                convertedPower = (value) / 735.4990028
            } else if (toUnit === 'kilowatt') {
                convertedPower = (value) / 1000
            } else if (toUnit === 'ton of refrigeration'){
                convertedPower = (value) * .0002843451361
            } else if (toUnit === 'watt'){
                convertedPower = parseFloat(value)
            }
        
        } else if (fromUnit === 'ton of refrigeration') {
            if (toUnit === 'watt'){
                convertedPower = (value) / .0002843451361
            } else if (toUnit === 'kilowatt'){
                convertedPower = (value) /.2843451361
            } else if (toUnit === 'horse power'){
                convertedPower = (value) / .2091355641
            } else if (toUnit === 'btu/h'){
                convertedPower = (value) * 12000
            } else if (toUnit === 'ton of refrigeration'){
                convertedPower = parseFloat(value)
            }
        }
         if (!isNaN(convertedPower)) {
        setConvertedValue(convertedPower.toFixed(10));
      } else {
        setConvertedValue('');
      }
    }


return (
    <div>
      <div className='title-con'>
      <span className= "title">Power</span>
      <span className= "title">Conversion</span>
      </div>
      <div>
      <div className='temperature-container'>
      <div className='quadrant1'>
        <label className='label'>
          From:
          <select className ='select' value={leftUnit} onChange={(e) => handleLeftUnitChange(e.target.value)}>
            <option value= 'btu/h' > Btu/h</option>
            <option value= 'horse power' > Horse Power</option>
            <option value= 'kilowatt' > Kilowatt</option>
            <option value= 'watt' > Watt</option>
            <option value= 'ton of refrigeration' > Ton of refrigeration</option>
          </select>
        </label>
      </div>
      <div className='quadrant2'>
        <label className='label'>
          To:
          <select className='select' value={rightUnit} onChange={(e) => handleRightUnitChange(e.target.value)}>
            <option value= 'btu/h' > Btu/h</option>
            <option value= 'horse power' > Horse Power</option>
            <option value= 'kilowatt' > Kilowatt</option>
            <option value= 'watt' > Watt</option>
            <option value= 'ton of refrigeration' > Ton of refrigeration</option>
          </select>
        </label>
      </div>
      <div className='quadrant3'>
        <label className='label'>
          Input Value:
          <input className='input'
            type="number"
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </label>
      </div>
      <div className='quadrant4'>
        <label className='label'>
          Converted Value:
          <input className='input'
            type="number"
            value={convertedValue}
            readOnly
          />
        </label>
        </div>
        </div>
        <div>
          <div> </div>
        <div className='quadrant5'>

          <button onClick={handleBackButtonClick}>Back to Homepage</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Power;