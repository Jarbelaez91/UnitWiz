import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Length (){

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
      navigate('/');
    };

    const [leftUnit, setLeftUnit] = useState ('meter');
    const [rightUnit, setRightUnit] = useState ('foot')
    const [inputValue, setInputValue] = useState ('')
    const [convertedValue, setConvertedValue] = useState ('');

    const handleInputChange = (value) => {
        setInputValue (value);
        convertLength (value, leftUnit , rightUnit)
    }

    const handleLeftUnitChange = (unit) => {
        setLeftUnit (unit)
        convertLength(inputValue, unit, rightUnit)
    };

    const handleRightUnitChange = (unit) =>{
        setRightUnit (unit)
        convertLength (inputValue,leftUnit, unit)
    }

    const convertLength = (value, fromUnit,toUnit) =>{
        if (!value.trim()) {
      setConvertedValue('');
      return;
        }

    let convertedLength;
        if (fromUnit === 'centimeter') {
            if (toUnit === 'meter') {
                convertedLength = (value) * .01
            } else if (toUnit === 'kilometer') {
                convertedLength = (value) * .00001
            } else if (toUnit === 'millimeter') {
                convertedLength = (value) * 10
            } else if (toUnit === 'mile'){
                convertedLength = (value) * .000006213711922
            } else if (toUnit === 'centimeter'){
                convertedLength = parseFloat(value)
            }else if (toUnit === 'yard'){
                convertedLength = (value)  * .01093613298 
            }else if (toUnit === 'inch'){
                convertedLength = (value) * .3937007874
            }else if (toUnit === 'foot'){
                convertedLength = (value) * .03280839895
            }else if (toUnit === 'nautical mile'){
                convertedLength = (value) * .000005399568035
            }

        } else if (fromUnit === 'kilometer'){
            if (toUnit === 'centimeter') {
                convertedLength = (value) * 100000
            } else if (toUnit === 'kilometer') {
                convertedLength = parseFloat(value) 
            } else if (toUnit === 'millimeter') {
                convertedLength = (value) * 1000000
            } else if (toUnit === 'mile'){
                convertedLength = (value) * .6213711922
            } else if (toUnit === 'meter'){
                convertedLength = (value) * 1000
            }else if (toUnit === 'yard'){
                convertedLength = (value) * 1093.613298
            }else if (toUnit === 'inch'){
                convertedLength = (value) * 39370.07874
            }else if (toUnit === 'foot'){
                convertedLength = (value) * 3280.839895
            }else if (toUnit === 'nautical mile'){
                convertedLength = (value) * .5399568035
            }


        } else if (fromUnit === 'meter') {
            if (toUnit === 'centimeter') {
                convertedLength = (value) * 100
            } else if (toUnit === 'kilometer') {
                convertedLength = (value) * .001
            } else if (toUnit === 'millimeter') {
                convertedLength = (value) * 1000
            } else if (toUnit === 'mile'){
                convertedLength = (value) * .0006213711922
            } else if (toUnit === 'meter'){
                convertedLength = parseFloat(value)
            }else if (toUnit === 'yard'){
                convertedLength = (value) * 1.093613298
            }else if (toUnit === 'inch'){
                convertedLength = (value) * 39.37007874
            }else if (toUnit === 'foot'){
                convertedLength = (value) * 3.280839895
            }else if (toUnit === 'nautical mile'){
                convertedLength = (value) * .0005399568035
            }

        } else if (fromUnit === 'millimeter') {
            if (toUnit === 'centimeter') {
                convertedLength = (value) * .1
            } else if (toUnit === 'kilometer') {
                convertedLength = (value) * .000001
            } else if (toUnit === 'millimeter') {
                convertedLength = parseFloat(value)
            } else if (toUnit === 'mile'){
                convertedLength = (value) * .0000006213711922
            } else if (toUnit === 'meter'){
                convertedLength = (value) * .001
            }else if (toUnit === 'yard'){
                convertedLength = (value) * .001093613298
            }else if (toUnit === 'inch'){
                convertedLength = (value) * .03937007874
            }else if (toUnit === 'foot'){
                convertedLength = (value) * .003280839895
            }else if (toUnit === 'nautical mile'){
                convertedLength = (value) * .0000005399568035
            }


        }else if (fromUnit === 'mile') {
            if (toUnit === 'centimeter') {
                convertedLength = (value) * 160934.4
            } else if (toUnit === 'kilometer') {
                convertedLength = (value) * 1.609344
            } else if (toUnit === 'millimeter') {
                convertedLength = (value) * 1609344
            } else if (toUnit === 'mile'){
                convertedLength = parseFloat(value) 
            } else if (toUnit === 'meter'){
                convertedLength = (value) * 1609.344
            }else if (toUnit === 'yard'){
                convertedLength = (value) * 1760
            }else if (toUnit === 'inch'){
                convertedLength = (value) * 63360
            }else if (toUnit === 'foot'){
                convertedLength = (value) * 5280
            }else if (toUnit === 'nautical mile'){
                convertedLength = (value) * .8689762419
            }


        }else if (fromUnit === 'yard') {
            if (toUnit === 'centimeter') {
                convertedLength = (value) * 91.44
            } else if (toUnit === 'kilometer') {
                convertedLength = (value) * .0009144
            } else if (toUnit === 'millimeter') {
                convertedLength = (value) * 2204.622622
            } else if (toUnit ==='mile'){
                convertedLength = (value) * .0005681818182
            } else if (toUnit === 'meter'){
                convertedLength = (value) * .9144
            }else if (toUnit === 'yard'){
                convertedLength = parseFloat(value)
            }else if (toUnit === 'inch'){
                convertedLength = (value) * 36
            }else if (toUnit === 'foot'){
                convertedLength = (value) * 3
            }else if (toUnit === 'nautical mile'){
                convertedLength = (value) * .0004937365011
            }



        }else if (fromUnit === 'inch') {
            if (toUnit === 'centimeter') {
                convertedLength = (value) * 2.54
            } else if (toUnit === 'kilometer') {
                convertedLength = (value) * .0000254
            } else if (toUnit === 'millimeter') {
                convertedLength = (value) * 25.4
            } else if (toUnit ==='mile'){
                convertedLength = (value) * .00001578282828
            } else if (toUnit === 'meter'){
                convertedLength = (value) * .0254
            }else if (toUnit === 'yard'){
                convertedLength = (value) * .02777777778
            }else if (toUnit === 'inch'){
                convertedLength = parseFloat(value) 
            }else if (toUnit === 'foot'){
                convertedLength = (value) * .0833333333333
            }else if (toUnit === 'nautical mile'){
                convertedLength = (value)* .00001371490281
            }


        }else if (fromUnit === 'foot') {
            if (toUnit === 'centimeter') {
                convertedLength = (value) * 30.48
            } else if (toUnit === 'kilometer') {
                convertedLength = (value) * .0003048
            } else if (toUnit === 'millimeter') {
                convertedLength = (value) * 304.8
            } else if (toUnit ==='mile'){
                convertedLength = (value) * .0001893939394
            } else if (toUnit === 'meter'){
                convertedLength = (value) * .3048
            }else if (toUnit === 'yard'){
                convertedLength = (value) * .33333333333333333
            }else if (toUnit === 'inch'){
                convertedLength = (value) * 12
            }else if (toUnit === 'foot'){
                convertedLength = parseFloat(value)
            }else if (toUnit === 'nautical mile'){
                convertedLength = (value) * .0001645788337
            }


        }else if (fromUnit === 'nautical mile') {
            if (toUnit === 'centimeter') {
                convertedLength = (value) * 185200
            } else if (toUnit === 'kilometer') {
                convertedLength = (value) * 1.852
            } else if (toUnit === 'millimeter') {
                convertedLength = (value) * 1852000
            } else if (toUnit ==='mile'){
                convertedLength = (value) * 1.150779448
            } else if (toUnit === 'meter'){
                convertedLength = (value) * 1852
            }else if (toUnit === 'yard'){
                convertedLength = (value) * 2025.371829
            }else if (toUnit === 'inch'){
                convertedLength = (value) * 72913.38583
            }else if (toUnit === 'foot'){
                convertedLength = (value)* 6076.115486
            }else if (toUnit === 'nautical mile'){
                convertedLength = parseFloat(value)
            }
        }


         if (!isNaN(convertedLength)) {
        setConvertedValue(convertedLength.toFixed(10));
      } else {
        setConvertedValue('');
      }
    }


return (

<div>
    <h2> Length Conversion</h2>
    <div>
    <label> Select Unit:
        <select value={leftUnit} onChange={(e) =>handleLeftUnitChange(e.target.value)}>
        <option value= 'centimeter' > Centimeter</option>
        <option value= 'kilometer' > Kilometer</option>
        <option value= 'meter' > Meter</option>
        <option value= 'millimeter' > millimeter</option>
        <option value= 'mile' > Mile</option>
        <option value= 'yard' > Yard </option>
        <option value= 'inch' > Inch </option>
        <option value= 'foot' > Foot </option>
        <option value= 'nautical mile' > Nautical Mile </option>
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
        <option value= 'centimeter' > Centimeter</option>
        <option value= 'kilometer' > Kilometer</option>
        <option value= 'meter' > Meter</option>
        <option value= 'millimeter' > millimeter</option>
        <option value= 'mile' > Mile</option>
        <option value= 'yard' > Yard </option>
        <option value= 'inch' > Inch </option>
        <option value= 'foot' > Foot </option>
        <option value= 'nautical mile' > Nautical Mile </option>
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
export default Length