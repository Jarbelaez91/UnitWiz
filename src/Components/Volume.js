import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './tempcon.css';

function Volume (){

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
      navigate('/');
    };

    const [leftUnit, setLeftUnit] = useState ('liter');
    const [rightUnit, setRightUnit] = useState ('milliliter')
    const [inputValue, setInputValue] = useState ('')
    const [convertedValue, setConvertedValue] = useState ('');

    const handleInputChange = (value) => {
        setInputValue (value);
        convertVolume (value, leftUnit , rightUnit)
    }

    const handleLeftUnitChange = (unit) => {
        setLeftUnit (unit)
        convertVolume(inputValue, unit, rightUnit)
    };

    const handleRightUnitChange = (unit) =>{
        setRightUnit (unit)
        convertVolume (inputValue,leftUnit, unit)
    }

    const convertVolume = (value, fromUnit,toUnit) =>{
        if (!value.trim()) {
      setConvertedValue('');
      return;
        }

    let convertedVolume;
        if (fromUnit === 'liter') {
            if (toUnit === 'milliliter') {
                convertedVolume = (value) * 1000
            } else if (toUnit === 'cubic_meter') {
                convertedVolume = (value) * 0.001
            } else if (toUnit === 'gallon') {
                convertedVolume = (value) * 0.264172
            } else if (toUnit === 'quart'){
                convertedVolume = (value) * 1.05669
            } else if (toUnit === 'pint'){
                convertedVolume = (value) * 2.11338
            } else if (toUnit === 'cup'){
                convertedVolume = (value) * 4.22675
            } else if (toUnit === 'ounce'){
                convertedVolume = (value) * 33.814
            } else if (toUnit === 'liter'){
                convertedVolume = parseFloat(value)
            }

        } else if (fromUnit === 'milliliter'){
            if (toUnit === 'liter') {
                convertedVolume = (value) * 0.001
            } else if (toUnit === 'cubic_meter') {
                convertedVolume = (value) * 0.000001
            } else if (toUnit === 'gallon') {
                convertedVolume = (value) * 0.000264172
            } else if (toUnit === 'quart'){
                convertedVolume = (value) * 0.00105669
            } else if (toUnit === 'pint'){
                convertedVolume = (value) * 0.00211338
            } else if (toUnit === 'cup'){
                convertedVolume = (value) * 0.00422675
            } else if (toUnit === 'ounce'){
                convertedVolume = (value) * 0.033814
            } else if (toUnit === 'milliliter'){
                convertedVolume = parseFloat(value)
            }
        } else if (fromUnit === 'cubic_meter') {
            if (toUnit === 'liter') {
                convertedVolume = (value) * 1000
            } else if (toUnit === 'milliliter') {
                convertedVolume = (value) * 1000000
            } else if (toUnit === 'gallon') {
                convertedVolume = (value) * 264.172
            } else if (toUnit === 'quart'){
                convertedVolume = (value) * 1056.69
            } else if (toUnit === 'pint'){
                convertedVolume = (value) * 2113.38
            } else if (toUnit === 'cup'){
                convertedVolume = (value) * 4226.75
            } else if (toUnit === 'ounce'){
                convertedVolume = (value) * 33814
            } else if (toUnit === 'cubic_meter'){
                convertedVolume = parseFloat(value)
            }
        } else if (fromUnit === 'gallon') {
            if (toUnit === 'liter') {
                convertedVolume = (value) * 3.78541
            } else if (toUnit === 'milliliter') {
                convertedVolume = (value) * 3785.41
            } else if (toUnit === 'cubic_meter') {
                convertedVolume = (value) * 0.00378541
            } else if (toUnit === 'quart'){
                convertedVolume = (value) * 4
            } else if (toUnit === 'pint'){
                convertedVolume = (value) * 8
            } else if (toUnit === 'cup'){
                convertedVolume = (value) * 16
            } else if (toUnit === 'ounce'){
                convertedVolume = (value) * 128
            } else if (toUnit === 'gallon'){
                convertedVolume = parseFloat(value)
            }
        
            }else if (fromUnit === 'quart') {
                if (toUnit === 'liter') {
                    convertedVolume = (value) * 0.946353
                } else if (toUnit === 'milliliter') {
                    convertedVolume = (value) * 946.353
                } else if (toUnit === 'cubic_meter') {
                    convertedVolume = (value) * 0.000946353
                } else if (toUnit === 'gallon'){
                    convertedVolume = (value) * 0.25
                } else if (toUnit === 'pint'){
                    convertedVolume = (value) * 2
                } else if (toUnit === 'cup'){
                    convertedVolume = (value) * 4
                } else if (toUnit === 'ounce'){
                    convertedVolume = (value) * 32
                } else if (toUnit === 'quart'){
                    convertedVolume = parseFloat(value)
                }


                } else if (fromUnit === 'pint') {
            if (toUnit === 'liter') {
                convertedVolume = (value) * 0.473176
            } else if (toUnit === 'milliliter') {
                convertedVolume = (value) * 473.176
            } else if (toUnit === 'cubic_meter') {
                convertedVolume = (value) * 0.000473176
            } else if (toUnit === 'gallon'){
                convertedVolume = (value) * 0.125
            } else if (toUnit === 'quart'){
                convertedVolume = (value) * 0.5
            } else if (toUnit === 'cup'){
                convertedVolume = (value) * 2
            } else if (toUnit === 'ounce'){
                convertedVolume = (value) * 16
            } else if (toUnit === 'pint'){
                convertedVolume = parseFloat(value)
            }
        } else if (fromUnit === 'cup') {
            if (toUnit === 'liter') {
                convertedVolume = (value) * 0.236588
            } else if (toUnit === 'milliliter') {
                convertedVolume = (value) * 236.588
            } else if (toUnit === 'cubic_meter') {
                convertedVolume = (value) * 0.000236588
            } else if (toUnit === 'gallon'){
                convertedVolume = (value) * 0.0625
            } else if (toUnit === 'quart'){
                convertedVolume = (value) * 0.25
            } else if (toUnit === 'pint'){
                convertedVolume = (value) * 0.5
            } else if (toUnit === 'ounce'){
                convertedVolume = (value) * 8
            } else if (toUnit === 'cup'){
                convertedVolume = parseFloat(value)
            }
        } else if (fromUnit === 'ounce') {
            if (toUnit === 'liter') {
                convertedVolume = (value) * 0.0295735
            } else if (toUnit === 'milliliter') {
                convertedVolume = (value) * 29.5735
            } else if (toUnit === 'cubic_meter') {
                convertedVolume = (value) * 0.0000295735
            } else if (toUnit === 'gallon'){
                convertedVolume = (value) * 0.0078125
            } else if (toUnit === 'quart'){
                convertedVolume = (value) * 0.03125
            } else if (toUnit === 'pint'){
                convertedVolume = (value) * 0.0625
            } else if (toUnit === 'cup'){
                convertedVolume = (value) * 0.125
            } else if (toUnit === 'ounce'){
                convertedVolume = parseFloat(value)
            }
        }


         if (!isNaN(convertedVolume)) {
        setConvertedValue(convertedVolume.toFixed(10));
      } else {
        setConvertedValue('');
      }
    }


    return (
        <div>
          <div className='title-con'>
          <span className= "title">Volume</span>
          <span className= "title">Conversion</span>
          </div>
          <div>
          <div className='temperature-container'>
          <div className='quadrant1'>
            <label className='label'>
              From:
              <select className ='select' value={leftUnit} onChange={(e) => handleLeftUnitChange(e.target.value)}>
                  <option value="cubic_meter">Cubic Meter</option>
                  <option value="liter">Liter</option>
                  <option value="milliliter">Milliliter</option>
                  <option value="gallon">Gallon</option>
                  <option value="quart">Quart</option>
                  <option value="pint">Pint</option>
                  <option value="cup">Cup</option>
                  <option value="ounce">Ounce</option>
              </select>
            </label>
          </div>
          <div className='quadrant2'>
            <label className='label'>
              To:
              <select className='select' value={rightUnit} onChange={(e) => handleRightUnitChange(e.target.value)}>
                  <option value="cubic_meter">Cubic Meter</option>
                  <option value="liter">Liter</option>
                  <option value="milliliter">Milliliter</option>
                  <option value="gallon">Gallon</option>
                  <option value="quart">Quart</option>
                  <option value="pint">Pint</option>
                  <option value="cup">Cup</option>
                  <option value="ounce">Ounce</option>
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
    
    export default Volume;
