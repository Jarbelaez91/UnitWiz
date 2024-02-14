import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './TimeCon.css';

function Area (){

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
      navigate('/');
    };

    const [leftUnit, setLeftUnit] = useState ('square kilometer');
    const [rightUnit, setRightUnit] = useState ('square meter')
    const [inputValue, setInputValue] = useState ('')
    const [convertedValue, setConvertedValue] = useState ('');

    const handleInputChange = (value) => {
        setInputValue (value);
        convertArea (value, leftUnit , rightUnit)
    }

    const handleLeftUnitChange = (unit) => {
        setLeftUnit (unit)
        convertArea(inputValue, unit, rightUnit)
    };

    const handleRightUnitChange = (unit) =>{
        setRightUnit (unit)
        convertArea (inputValue,leftUnit, unit)
    }

    const convertArea = (value, fromUnit,toUnit) =>{
        if (!value.trim()) {
      setConvertedValue('');
      return;
        }

    let convertedArea;
        if (fromUnit === 'square mile') {
            if (toUnit === 'square meter') {
                convertedArea = (value) * 2589988.11
            } else if (toUnit === 'square kilometer') {
                convertedArea = (value) * 2.58998811
            } else if (toUnit === 'square yard') {
                convertedArea = (value) * 3097600
            } else if (toUnit === 'square foot'){
                convertedArea = (value) * 27878400
            } else if (toUnit === 'square mile'){
                convertedArea = parseFloat(value)
            }else if (toUnit === 'square inch'){
                convertedArea = (value) * 4014489600
            }else if (toUnit === 'hectare'){
                convertedArea = (value) * 258.998811
            }else if (toUnit === 'acre'){
                convertedArea = (value) * 640
            }

        } else if (fromUnit === 'square kilometer'){
            if (toUnit === 'square mile') {
                convertedArea = (value) * .3861021585
            } else if (toUnit === 'square kilometer') {
                convertedArea = parseFloat(value) 
            } else if (toUnit === 'square yard') {
                convertedArea = (value) * 1195990.046
            } else if (toUnit === 'square foot'){
                convertedArea = (value) * 10763910.42
            } else if (toUnit === 'square meter'){
                convertedArea = (value) * 1000000
            }else if (toUnit === 'square inch'){
                convertedArea = (value) * 1550003100
            }else if (toUnit === 'hectare'){
                convertedArea = (value) * 100
            }else if (toUnit === 'acre'){
                convertedArea = (value) * 247.1053815
            }


        } else if (fromUnit === 'square meter') {
            if (toUnit === 'square mile') {
                convertedArea = (value) * .0000003861021585
            } else if (toUnit === 'square kilometer') {
                convertedArea = (value) * .000001
            } else if (toUnit === 'square yard') {
                convertedArea = (value) * 1.195990046
            } else if (toUnit === 'square foot'){
                convertedArea = (value) * 10.76391042
            } else if (toUnit === 'square meter'){
                convertedArea = parseFloat(value)
            }else if (toUnit === 'square inch'){
                convertedArea = (value) * 1550.0031
            }else if (toUnit === 'hectare'){
                convertedArea = (value) * .0001
            }else if (toUnit === 'acre'){
                convertedArea = (value) * .0002471053815
            }

        } else if (fromUnit === 'square yard') {
            if (toUnit === 'square mile') {
                convertedArea = (value) * .0000003228305785
            } else if (toUnit === 'square kilometer') {
                convertedArea = (value) * .00000083612736
            } else if (toUnit === 'square yard') {
                convertedArea = parseFloat(value)
            } else if (toUnit === 'square foot'){
                convertedArea = (value) * 9
            } else if (toUnit === 'square meter'){
                convertedArea = (value) * .083612736
            }else if (toUnit === 'square inch'){
                convertedArea = (value) * 1296
            }else if (toUnit === 'hectare'){
                convertedArea = (value) * .000083612736
            }else if (toUnit === 'acre'){
                convertedArea = (value) * .0002066115702
            }

        }else if (fromUnit === 'square foot') {
            if (toUnit === 'square mile') {
                convertedArea = (value) * .00000003587006428
            } else if (toUnit === 'square kilometer') {
                convertedArea = (value) * 0.00000009290304
            } else if (toUnit === 'square yard') {
                convertedArea = (value) * .1111111111
            } else if (toUnit === 'square foot'){
                convertedArea = parseFloat(value) 
            } else if (toUnit === 'square meter'){
                convertedArea = (value) * .09290304
            }else if (toUnit === 'square inch'){
                convertedArea = (value) * 144
            }else if (toUnit === 'hectare'){
                convertedArea = (value) *.0000009290304
            }else if (toUnit === 'acre'){
                convertedArea = (value) * .00002295684114
            }


        }else if (fromUnit === 'square inch') {
            if (toUnit === 'square mile') {
                convertedArea = (value) * .0000000002490976686
            } else if (toUnit === 'square kilometer') {
                convertedArea = (value) * .00000000064516
            } else if (toUnit === 'square yard') {
                convertedArea = (value) * .0007716049383
            } else if (toUnit === 'square foot'){
                convertedArea = (value) * .006944444444
            } else if (toUnit === 'square meter'){
                convertedArea = (value) * .00064516
            }else if (toUnit === 'square inch'){
                convertedArea = parseFloat(value)
            }else if (toUnit === 'hectare'){
                convertedArea = (value) * .000000064516
            }else if (toUnit === 'acre'){
                convertedArea = (value) * .0000001594225079
            }


        }else if (fromUnit === 'hectare') {
            if (toUnit === 'square mile') {
                convertedArea = (value) * .003861021585
            } else if (toUnit === 'square kilometer') {
                convertedArea = (value) * .01
            } else if (toUnit === 'square yard') {
                convertedArea = (value) * 11959.90046
            } else if (toUnit === 'square foot'){
                convertedArea = (value) * 107639.1042
            } else if (toUnit === 'square meter'){
                convertedArea = (value) * 10000
            }else if (toUnit === 'square inch'){
                convertedArea = (value) * 15500031
            }else if (toUnit === 'hectare'){
                convertedArea = parseFloat(value) 
            }else if (toUnit === 'acre'){
                convertedArea = (value) * 2.471053815
            }


        }else if (fromUnit === 'acre') {
            if (toUnit === 'square mile') {
                convertedArea = (value) * .0015625
            } else if (toUnit === 'square kilometer') {
                convertedArea = (value) * .004046856422
            } else if (toUnit === 'square yard') {
                convertedArea = (value) * 4840
            } else if (toUnit === 'square foot'){
                convertedArea = (value) * 43560
            } else if (toUnit === 'square meter'){
                convertedArea = (value) * 4046.856422
            }else if (toUnit === 'square inch'){
                convertedArea = (value) * 6272640
            }else if (toUnit === 'hectare'){
                convertedArea = (value) * .4046856422
            }else if (toUnit === 'acre'){
                convertedArea = parseFloat(value)
            }
        }

       
         if (!isNaN(convertedArea)) {
        setConvertedValue(convertedArea.toFixed(10));
      } else {
        setConvertedValue('');
      }
    }


return (

<div>
    <h2> Area Conversion</h2>
    <div>
    <label> Select Unit:
        <select value={leftUnit} onChange={(e) =>handleLeftUnitChange(e.target.value)}>
        <option value= 'square mile' > Square Mile</option>
        <option value= 'square kilometer' > Square Kilometer</option>
        <option value= 'square meter' > Square Meter</option>
        <option value= 'square yard' > Square Yard</option>
        <option value= 'square foot' > Square Foot</option>
        <option value= 'square inch' > Square Inch </option>
        <option value= 'hectare' > Hectare </option>
        <option value= 'acre' > Acre </option>
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
        <option value= 'square mile' > Square Mile</option>
        <option value= 'square kilometer' > Square Kilometer</option>
        <option value= 'square meter' > Square Meter</option>
        <option value= 'square yard' > Square Yard</option>
        <option value= 'square foot' > Square Foot</option>
        <option value= 'square inch' > Square Inch </option>
        <option value= 'hectare' > Hectare </option>
        <option value= 'acre' > Acre </option>
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
export default Area