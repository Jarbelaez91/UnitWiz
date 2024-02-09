import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Weight (){

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
      navigate('/');
    };

    const [leftUnit, setLeftUnit] = useState ('kilogram');
    const [rightUnit, setRightUnit] = useState ('pound')
    const [inputValue, setInputValue] = useState ('')
    const [convertedValue, setConvertedValue] = useState ('');

    const handleInputChange = (value) => {
        setInputValue (value);
        convertWeight (value, leftUnit , rightUnit)
    }

    const handleLeftUnitChange = (unit) => {
        setLeftUnit (unit)
        convertWeight(inputValue, unit, rightUnit)
    };

    const handleRightUnitChange = (unit) =>{
        setRightUnit (unit)
        convertWeight (inputValue,leftUnit, unit)
    }

    const convertWeight = (value, fromUnit,toUnit) =>{
        if (!value.trim()) {
      setConvertedValue('');
      return;
        }

    let convertedWeight;
        if (fromUnit === 'gram') {
            if (toUnit === 'milligram') {
                convertedWeight = (value) * 1000
            } else if (toUnit === 'kilogram') {
                convertedWeight = (value) / 1000
            } else if (toUnit === 'pound') {
                convertedWeight = (value) * 453.59237
            } else if (toUnit === 'ounce'){
                convertedWeight = (value) * 28.34952312
            } else if (toUnit === 'gram'){
                convertedWeight = parseFloat(value)
            }else if (toUnit === 'tonne'){
                convertedWeight = (value) / 1000000 
            }else if (toUnit === 'ton long'){
                convertedWeight = (value) / 1016046.909
            }else if (toUnit === 'ton short'){
                convertedWeight = (value)/907184.74
            }else if (toUnit === 'stone'){
                convertedWeight = (value) /6350.29318
            }else if (toUnit === 'troy pound'){
                convertedWeight = (value) / 373.2417216
            }else if (toUnit === 'troy ounce'){
                convertedWeight = (value)/31.1034768
            }else if (toUnit === 'penny weight'){
                convertedWeight = (value)/1.55517384
            }else if (toUnit === 'grain'){
                convertedWeight = (value) * 15.43235835
            }else if (toUnit === 'carat'){ 
                convertedWeight = (value) * 5
            }

        } else if (fromUnit === 'kilogram'){
            if (toUnit === 'gram') {
                convertedWeight = (value) * 1000
            } else if (toUnit === 'kilogram') {
                convertedWeight = parseFloat(value) 
            } else if (toUnit === 'pound') {
                convertedWeight = (value) * 2.204622622
            } else if (toUnit === 'ounce'){
                convertedWeight = (value) * 35.27396195
            } else if (toUnit === 'milligram'){
                convertedWeight = (value) * 1000000
            }else if (toUnit === 'tonne'){
                convertedWeight = (value) * 1000
            }else if (toUnit === 'ton long'){
                convertedWeight = (value) * 1016.046909
            }else if (toUnit === 'ton short'){
                convertedWeight = (value) * 907.18474
            }else if (toUnit === 'stone'){
                convertedWeight = (value) * 6.35029318
            }else if (toUnit === 'troy pound'){
                convertedWeight = (value) * 2.679228881
            }else if (toUnit === 'troy ounce'){
                convertedWeight = (value) * 32.15074657
            }else if (toUnit === 'penny weight'){
                convertedWeight = (value) * 643.0149314
            }else if (toUnit === 'grain'){
                convertedWeight = (value) * 15432.35835
            }else if (toUnit === 'carat'){
                convertedWeight = (value) * 5000
            }


        } else if (fromUnit === 'milligram') {
            if (toUnit === 'gram') {
                convertedWeight = (value) * 1000
            } else if (toUnit === 'kilogram') {
                convertedWeight = (value) * 1000000
            } else if (toUnit === 'pound') {
                convertedWeight = (value) * 453592.37
            } else if (toUnit === 'ounce'){
                convertedWeight = (value) * 28349.52312
            } else if (toUnit === 'milligram'){
                convertedWeight = parseFloat(value)
            }else if (toUnit === 'tonne'){
                convertedWeight = (value) * 1000000000
            }else if (toUnit === 'ton long'){
                convertedWeight = (value) * 1016046909
            }else if (toUnit === 'ton short'){
                convertedWeight = (value)* 907184740
            }else if (toUnit === 'stone'){
                convertedWeight = (value) * 6350293.18
            }else if (toUnit === 'troy pound'){
                convertedWeight = (value) * 373241.7216
            }else if (toUnit === 'troy ounce'){
                convertedWeight = (value) * 31103.4768
            }else if (toUnit === 'penny weight'){
                convertedWeight = (value) *1555.17384
            }else if (toUnit === 'grain'){
                convertedWeight = (value) * 64.79891
            }else if (toUnit === 'carat'){
                convertedWeight = (value) * 200
            }

        } else if (fromUnit === 'pound') {
            if (toUnit === 'gram') {
                convertedWeight = (value) * 453.59237
            } else if (toUnit === 'kilogram') {
                convertedWeight = (value) *.45359237
            } else if (toUnit === 'pound') {
                convertedWeight = parseFloat(value)
            } else if (toUnit === 'ounce'){
                convertedWeight = (value) * 16
            } else if (toUnit === 'milligram'){
                convertedWeight = (value) * 453592.37
            }else if (toUnit === 'tonne'){
                convertedWeight = (value) * .00045359237
            }else if (toUnit === 'ton long'){
                convertedWeight = (value) * .0004464285714
            }else if (toUnit === 'ton short'){
                convertedWeight = (value) * .0005
            }else if (toUnit === 'stone'){
                convertedWeight = (value) * .07142857143
            }else if (toUnit === 'troy pound'){
                convertedWeight = (value) * 1.215277778
            }else if (toUnit === 'troy ounce'){
                convertedWeight = (value) * 14.58333333
            }else if (toUnit === 'penny weight'){
                convertedWeight = (value) * 291.6666667
            }else if (toUnit === 'grain'){
                convertedWeight = (value) * 7000
            }else if (toUnit === 'carat'){
                convertedWeight = (value) * 2267.96185
            }
        }else if (fromUnit === 'ounce') {
            if (toUnit === 'gram') {
                convertedWeight = (value) * 28.34952312
            } else if (toUnit === 'kilogram') {
                convertedWeight = (value) * 0.02834952312
            } else if (toUnit === 'pound') {
                convertedWeight = (value) * .0625
            } else if (toUnit === 'ounce'){
                convertedWeight = parseFloat(value) 
            } else if (toUnit === 'milligram'){
                convertedWeight = (value) * 28349.52312
            }else if (toUnit === 'tonne'){
                convertedWeight = (value) * .00002834952313
            }else if (toUnit === 'ton long'){
                convertedWeight = (value) *.00002790178571
            }else if (toUnit === 'ton short'){
                convertedWeight = (value) * .00003125
            }else if (toUnit === 'stone'){
                convertedWeight = (value) * .004464285714
            }else if (toUnit === 'troy pound'){
                convertedWeight = (value) * .07595486111
            }else if (toUnit === 'troy ounce'){
                convertedWeight = (value) * .9114583333
            }else if (toUnit === 'penny weight'){
                convertedWeight = (value) * 18.29916667
            }else if (toUnit === 'grain'){
                convertedWeight = (value) * 437.5
            }else if (toUnit === 'carat'){
                convertedWeight = (value) * 141.7476156
            }
        }else if (fromUnit === 'tonne') {
            if (toUnit === 'gram') {
                convertedWeight = (value) * 1000000
            } else if (toUnit === 'kilogram') {
                convertedWeight = (value) * 1000
            } else if (toUnit === 'pound') {
                convertedWeight = (value) * 2204.622622
            } else if (toUnit === 'ounce'){
                convertedWeight = (value) * 35273.96195
            } else if (toUnit === 'milligram'){
                convertedWeight = (value) * 1000000000
            }else if (toUnit === 'tonne'){
                convertedWeight = parseFloat(value)
            }else if (toUnit === 'ton long'){
                convertedWeight = (value) *.9842065276
            }else if (toUnit === 'ton short'){
                convertedWeight = (value) * 1.102311311
            }else if (toUnit === 'stone'){
                convertedWeight = (value) * 157.4730444
            }else if (toUnit === 'troy pound'){
                convertedWeight = (value) * 2679.228881
            }else if (toUnit === 'troy ounce'){
                convertedWeight = (value) * 32150.74657
            }else if (toUnit === 'penny weight'){
                convertedWeight = (value) * 643014.9314
            }else if (toUnit === 'grain'){
                convertedWeight = (value) * 15432358.35
            }else if (toUnit === 'carat'){
                convertedWeight = (value) * 5000000
            }
        }else if (fromUnit === 'pound') {
            if (toUnit === 'gram') {
                convertedWeight = (value) * 3412.141632
            } else if (toUnit === 'kilogram') {
                convertedWeight = (value) / 0.7354990028
            } else if (toUnit === 'pound') {
                convertedWeight = (value) * 1000
            } else if (toUnit === 'ounce'){
                convertedWeight = (value) * .2843451361
            } else if (toUnit === 'milligram'){
                convertedWeight = parseFloat(value)
            }else if (toUnit === 'tonne'){
                convertedWeight = (value)
            }else if (toUnit === 'ton long'){
                convertedWeight = (value)
            }else if (toUnit === 'ton short'){
                convertedWeight = (value)
            }else if (toUnit === 'stone'){
                convertedWeight = (value)
            }else if (toUnit === 'troy pound'){
                convertedWeight = (value)
            }else if (toUnit === 'troy ounce'){
                convertedWeight = (value)
            }else if (toUnit === 'penny weight'){
                convertedWeight = (value)
            }else if (toUnit === 'grain'){
                convertedWeight = (value)
            }else if (toUnit === 'carat'){
                convertedWeight = (value)
            }
        }else if (fromUnit === 'pound') {
            if (toUnit === 'gram') {
                convertedWeight = (value) * 3412.141632
            } else if (toUnit === 'kilogram') {
                convertedWeight = (value) / 0.7354990028
            } else if (toUnit === 'pound') {
                convertedWeight = (value) * 1000
            } else if (toUnit === 'ounce'){
                convertedWeight = (value) * .2843451361
            } else if (toUnit === 'milligram'){
                convertedWeight = parseFloat(value)
            }else if (toUnit === 'tonne'){
                convertedWeight = (value)
            }else if (toUnit === 'ton long'){
                convertedWeight = (value)
            }else if (toUnit === 'ton short'){
                convertedWeight = (value)
            }else if (toUnit === 'stone'){
                convertedWeight = (value)
            }else if (toUnit === 'troy pound'){
                convertedWeight = (value)
            }else if (toUnit === 'troy ounce'){
                convertedWeight = (value)
            }else if (toUnit === 'penny weight'){
                convertedWeight = (value)
            }else if (toUnit === 'grain'){
                convertedWeight = (value)
            }else if (toUnit === 'carat'){
                convertedWeight = (value)
            }
        }else if (fromUnit === 'pound') {
            if (toUnit === 'gram') {
                convertedWeight = (value) * 3412.141632
            } else if (toUnit === 'kilogram') {
                convertedWeight = (value) / 0.7354990028
            } else if (toUnit === 'pound') {
                convertedWeight = (value) * 1000
            } else if (toUnit === 'ounce'){
                convertedWeight = (value) * .2843451361
            } else if (toUnit === 'milligram'){
                convertedWeight = parseFloat(value)
            }else if (toUnit === 'tonne'){
                convertedWeight = (value)
            }else if (toUnit === 'ton long'){
                convertedWeight = (value)
            }else if (toUnit === 'ton short'){
                convertedWeight = (value)
            }else if (toUnit === 'stone'){
                convertedWeight = (value)
            }else if (toUnit === 'troy pound'){
                convertedWeight = (value)
            }else if (toUnit === 'troy ounce'){
                convertedWeight = (value)
            }else if (toUnit === 'penny weight'){
                convertedWeight = (value)
            }else if (toUnit === 'grain'){
                convertedWeight = (value)
            }else if (toUnit === 'carat'){
                convertedWeight = (value)
            }
        }else if (fromUnit === 'pound') {
            if (toUnit === 'gram') {
                convertedWeight = (value) * 3412.141632
            } else if (toUnit === 'kilogram') {
                convertedWeight = (value) / 0.7354990028
            } else if (toUnit === 'pound') {
                convertedWeight = (value) * 1000
            } else if (toUnit === 'ounce'){
                convertedWeight = (value) * .2843451361
            } else if (toUnit === 'milligram'){
                convertedWeight = parseFloat(value)
            }else if (toUnit === 'tonne'){
                convertedWeight = (value)
            }else if (toUnit === 'ton long'){
                convertedWeight = (value)
            }else if (toUnit === 'ton short'){
                convertedWeight = (value)
            }else if (toUnit === 'stone'){
                convertedWeight = (value)
            }else if (toUnit === 'troy pound'){
                convertedWeight = (value)
            }else if (toUnit === 'troy ounce'){
                convertedWeight = (value)
            }else if (toUnit === 'penny weight'){
                convertedWeight = (value)
            }else if (toUnit === 'grain'){
                convertedWeight = (value)
            }else if (toUnit === 'carat'){
                convertedWeight = (value)
            }
        }else if (fromUnit === 'pound') {
            if (toUnit === 'gram') {
                convertedWeight = (value) * 3412.141632
            } else if (toUnit === 'kilogram') {
                convertedWeight = (value) / 0.7354990028
            } else if (toUnit === 'pound') {
                convertedWeight = (value) * 1000
            } else if (toUnit === 'ounce'){
                convertedWeight = (value) * .2843451361
            } else if (toUnit === 'milligram'){
                convertedWeight = parseFloat(value)
            }else if (toUnit === 'tonne'){
                convertedWeight = (value)
            }else if (toUnit === 'ton long'){
                convertedWeight = (value)
            }else if (toUnit === 'ton short'){
                convertedWeight = (value)
            }else if (toUnit === 'stone'){
                convertedWeight = (value)
            }else if (toUnit === 'troy pound'){
                convertedWeight = (value)
            }else if (toUnit === 'troy ounce'){
                convertedWeight = (value)
            }else if (toUnit === 'penny weight'){
                convertedWeight = (value)
            }else if (toUnit === 'grain'){
                convertedWeight = (value)
            }else if (toUnit === 'carat'){
                convertedWeight = (value)
            }
        }else if (fromUnit === 'pound') {
            if (toUnit === 'gram') {
                convertedWeight = (value) * 3412.141632
            } else if (toUnit === 'kilogram') {
                convertedWeight = (value) / 0.7354990028
            } else if (toUnit === 'pound') {
                convertedWeight = (value) * 1000
            } else if (toUnit === 'ounce'){
                convertedWeight = (value) * .2843451361
            } else if (toUnit === 'milligram'){
                convertedWeight = parseFloat(value)
            }else if (toUnit === 'tonne'){
                convertedWeight = (value)
            }else if (toUnit === 'ton long'){
                convertedWeight = (value)
            }else if (toUnit === 'ton short'){
                convertedWeight = (value)
            }else if (toUnit === 'stone'){
                convertedWeight = (value)
            }else if (toUnit === 'troy pound'){
                convertedWeight = (value)
            }else if (toUnit === 'troy ounce'){
                convertedWeight = (value)
            }else if (toUnit === 'penny weight'){
                convertedWeight = (value)
            }else if (toUnit === 'grain'){
                convertedWeight = (value)
            }else if (toUnit === 'carat'){
                convertedWeight = (value)
            }
        }else if (fromUnit === 'pound') {
            if (toUnit === 'gram') {
                convertedWeight = (value) * 3412.141632
            } else if (toUnit === 'kilogram') {
                convertedWeight = (value) / 0.7354990028
            } else if (toUnit === 'pound') {
                convertedWeight = (value) * 1000
            } else if (toUnit === 'ounce'){
                convertedWeight = (value) * .2843451361
            } else if (toUnit === 'milligram'){
                convertedWeight = parseFloat(value)
            }else if (toUnit === 'tonne'){
                convertedWeight = (value)
            }else if (toUnit === 'ton long'){
                convertedWeight = (value)
            }else if (toUnit === 'ton short'){
                convertedWeight = (value)
            }else if (toUnit === 'stone'){
                convertedWeight = (value)
            }else if (toUnit === 'troy pound'){
                convertedWeight = (value)
            }else if (toUnit === 'troy ounce'){
                convertedWeight = (value)
            }else if (toUnit === 'penny weight'){
                convertedWeight = (value)
            }else if (toUnit === 'grain'){
                convertedWeight = (value)
            }else if (toUnit === 'carat'){
                convertedWeight = (value)
            }
        }else if (fromUnit === 'pound') {
            if (toUnit === 'gram') {
                convertedWeight = (value) * 3412.141632
            } else if (toUnit === 'kilogram') {
                convertedWeight = (value) / 0.7354990028
            } else if (toUnit === 'pound') {
                convertedWeight = (value) * 1000
            } else if (toUnit === 'ounce'){
                convertedWeight = (value) * .2843451361
            } else if (toUnit === 'milligram'){
                convertedWeight = parseFloat(value)
            }else if (toUnit === 'tonne'){
                convertedWeight = (value)
            }else if (toUnit === 'ton long'){
                convertedWeight = (value)
            }else if (toUnit === 'ton short'){
                convertedWeight = (value)
            }else if (toUnit === 'stone'){
                convertedWeight = (value)
            }else if (toUnit === 'troy pound'){
                convertedWeight = (value)
            }else if (toUnit === 'troy ounce'){
                convertedWeight = (value)
            }else if (toUnit === 'penny weight'){
                convertedWeight = (value)
            }else if (toUnit === 'grain'){
                convertedWeight = (value)
            }else if (toUnit === 'carat'){
                convertedWeight = (value)
            }
        }
         if (!isNaN(convertedWeight)) {
        setConvertedValue(convertedWeight.toFixed(10));
      } else {
        setConvertedValue('');
      }
    }


return (

<div>
    <h2> Weight Conversion</h2>
    <div>
    <label> Select Unit:
        <select value={leftUnit} onChange={(e) =>handleLeftUnitChange(e.target.value)}>
        <option value= 'gram' > Gram</option>
        <option value= 'kilogram' > Kilogram</option>
        <option value= 'milligram' > Milligram</option>
        <option value= 'pound' > Pound</option>
        <option value= 'ounce' > Ounce</option>
        <option value= 'tonne' > Tonne </option>
        <option value= 'ton long' > Ton Long(UK) </option>
        <option value= 'ton short' > Ton Short(US) </option>
        <option value= 'stone' > Stone </option>
        <option value= 'troy ounce' > Troy Ounce </option>
        <option value= 'troy pound' > Troy Pound </option>
        <option value= 'pennyweight' > Pennyweight </option>
        <option value= 'grain' > Grain </option>
        <option value= 'carat' > Carat </option>
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
        <option value= 'gram' > Gram</option>
        <option value= 'kilogram' > Kilogram</option>
        <option value= 'milligram' > Milligram</option>
        <option value= 'pound' > Pound</option>
        <option value= 'ounce' > Ounce</option>
        <option value= 'tonne' > Tonne </option>
        <option value= 'ton long' > Ton Long(UK) </option>
        <option value= 'ton short' > Ton Short(US) </option>
        <option value= 'stone' > Stone </option>
        <option value= 'troy ounce' > Troy Ounce </option>
        <option value= 'troy pound' > Troy Pound </option>
        <option value= 'pennyweight' > Pennyweight </option>
        <option value= 'grain' > Grain </option>
        <option value= 'carat' > Carat </option>
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
export default Weight