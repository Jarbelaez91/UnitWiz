import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './TimeCon.css';

function Speed (){

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
      navigate('/');
    };

    const [leftUnit, setLeftUnit] = useState ('kilometer per hour');
    const [rightUnit, setRightUnit] = useState ('miles per hour')
    const [inputValue, setInputValue] = useState ('')
    const [convertedValue, setConvertedValue] = useState ('');

    const handleInputChange = (value) => {
        setInputValue (value);
        convertSpeed (value, leftUnit , rightUnit)
    }

    const handleLeftUnitChange = (unit) => {
        setLeftUnit (unit)
        convertSpeed (inputValue, unit, rightUnit)
    };

    const handleRightUnitChange = (unit) =>{
        setRightUnit (unit)
        convertSpeed (inputValue,leftUnit, unit)
    }

    const convertSpeed = (value, fromUnit,toUnit) =>{
        if (!value.trim()) {
      setConvertedValue('');
      return;
        }

    let convertedSpeed;
        if (fromUnit === 'miles per hour') {
            if (toUnit === 'meter per second') {
                convertedSpeed = (value) * .44704
            } else if (toUnit === 'kilometer per hour') {
                convertedSpeed = (value) * 1.609344
            } else if (toUnit === 'feet per minute') {
                convertedSpeed = (value) * 88
            } else if (toUnit === 'feet per second'){
                convertedSpeed = (value) * 1.466666667
            } else if (toUnit === 'miles per hour'){
                convertedSpeed = parseFloat(value)
            }else if (toUnit === 'knot'){
                convertedSpeed = (value) * .8689762419
            }

        } else if (fromUnit === 'kilometer per hour'){
            if (toUnit === 'miles per hour') {
                convertedSpeed = (value) * .6213711922
            } else if (toUnit === 'kilometer per hour') {
                convertedSpeed = parseFloat(value) 
            } else if (toUnit === 'feet per minute') {
                convertedSpeed = (value) * 54.68066492
            } else if (toUnit === 'feet per second'){
                convertedSpeed = (value) * .9113444153
            } else if (toUnit === 'meter per second'){
                convertedSpeed = (value) * .277777778
            }else if (toUnit === 'knot'){
                convertedSpeed = (value) * .5399568035
            }


        } else if (fromUnit === 'meter per second') {
            if (toUnit === 'miles per hour') {
                convertedSpeed = (value) * 2.236936292
            } else if (toUnit === 'kilometer per hour') {
                convertedSpeed = (value) * 3.6
            } else if (toUnit === 'feet per minute') {
                convertedSpeed = (value) * 196.8503937
            } else if (toUnit === 'feet per second'){
                convertedSpeed = (value) * 3.280839895
            } else if (toUnit === 'meter per second'){
                convertedSpeed = parseFloat(value)
            }else if (toUnit === 'knot'){
                convertedSpeed = (value)  * 1.943844492
            }

        } else if (fromUnit === 'feet per second') {
            if (toUnit === 'miles per hour') {
                convertedSpeed = (value) * .6818181818
            } else if (toUnit === 'kilometer per hour') {
                convertedSpeed = (value) * 1.09728
            } else if (toUnit === 'feet per minute') {
                convertedSpeed = (value) * 60
            } else if (toUnit === 'feet per second'){
                convertedSpeed = parseFloat(value)
            } else if (toUnit === 'meter per second'){
                convertedSpeed = (value) * .3048
            }else if (toUnit === 'knot'){
                convertedSpeed = (value) * .5924838013
            }

        }else if (fromUnit === 'feet per minute') {
            if (toUnit === 'miles per hour') {
                convertedSpeed = (value) * .0113636363636
            } else if (toUnit === 'kilometer per hour') {
                convertedSpeed = (value) * .018288
            } else if (toUnit === 'feet per second') {
                convertedSpeed = (value) * .016666666667
            } else if (toUnit === 'feet per minute'){
                convertedSpeed = parseFloat(value) 
            } else if (toUnit === 'meter per second'){
                convertedSpeed = (value) * .00508
            }else if (toUnit === 'knot'){
                convertedSpeed = (value) * .009874730022
            }

        }else if (fromUnit === 'knot') {
            if (toUnit === 'miles per hour') {
                convertedSpeed = (value) * 1.150779448
            } else if (toUnit === 'kilometer per hour') {
                convertedSpeed = (value) * 1.852
            } else if (toUnit === 'feet per minute') {
                convertedSpeed = (value) * 101.2685914
            } else if (toUnit === 'feet per second'){
                convertedSpeed = (value) * 1.687809857
            } else if (toUnit === 'meter per second'){
                convertedSpeed = (value) * .51444444444
            }else if (toUnit === 'knot'){
                convertedSpeed = parseFloat(value)
            }

        }
         if (!isNaN(convertedSpeed)) {
        setConvertedValue(convertedSpeed.toFixed(10));
      } else {
        setConvertedValue('');
      }
    }


return (

<div>
    <h2> Speed Conversion</h2>
    <div>
    <label> Select Unit:
        <select value={leftUnit} onChange={(e) =>handleLeftUnitChange(e.target.value)}>
        <option value= 'miles per hour' > Miles per Hour</option>
        <option value= 'kilometer per hour' > Kilometer per Hour</option>
        <option value= 'meter per second' > Meter per Second</option>
        <option value= 'feet per minute' > Feet per Minute</option>
        <option value= 'feet per second' > Feet per Second</option>
        <option value= 'knot' > Knot </option>
        </select>
    </label>
    <div>
        <label>Input Value:</label>
        <input
        type= "number"
        value={inputValue}
        onChange={(e) => handleInputChange (e.target.value)}
        />
    </div>
    </div>
    <div>
        <label>
            Convert to:
        </label>
        <select value = {rightUnit} onChange={(e) => handleRightUnitChange(e.target.value)}>
        <option value= 'miles per hour' > Miles per Hour</option>
        <option value= 'kilometer per hour' > Kilometer per Hour</option>
        <option value= 'meter per second' > Meter per Second</option>
        <option value= 'feet per minute' > Feet per Minute</option>
        <option value= 'feet per second' > Feet per Second</option>
        <option value= 'knot' > Knot </option>
        </select>
    </div>
    <div>
        <label> conversion:</label>
        <input 
        type= "number"
        value={convertedValue}
        readOnly/>
    </div>
    <div>
          <button onClick={handleBackButtonClick}>Back to Homepage</button>
    </div>
</div>


)
}
export default Speed