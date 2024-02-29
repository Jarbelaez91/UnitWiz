import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './tempcon.css';

function TimeCon (){

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
      navigate('/');
    };

    const [leftUnit, setLeftUnit] = useState ('hour');
    const [rightUnit, setRightUnit] = useState ('minute')
    const [inputValue, setInputValue] = useState ('')
    const [convertedValue, setConvertedValue] = useState ('');

    const handleInputChange = (value) => {
        setInputValue (value);
        convertTime (value, leftUnit , rightUnit)
    }

    const handleLeftUnitChange = (unit) => {
        setLeftUnit (unit)
        convertTime(inputValue, unit, rightUnit)
    };

    const handleRightUnitChange = (unit) =>{
        setRightUnit (unit)
        convertTime (inputValue,leftUnit, unit)
    }

    const convertTime = (value, fromUnit,toUnit) =>{
        if (!value.trim()) {
      setConvertedValue('');
      return;
        }

    let convertedTime;
        if (fromUnit === 'century') {
            if (toUnit === 'millenium') {
                convertedTime = (value) * .01
            } else if (toUnit === 'hour') {
                convertedTime = (value) * 876000
            } else if (toUnit === 'minute') {
                convertedTime = (value) * 52560000
            } else if (toUnit === 'milliseconds'){
                convertedTime = (value) * 3153600000000
            } else if (toUnit === 'century'){
                convertedTime = parseFloat(value)
            }else if (toUnit === 'seconds'){
                convertedTime = (value) * 3153600000 
            }else if (toUnit === 'day'){
                convertedTime = (value) * 36500
            }else if (toUnit === 'week'){
                convertedTime = (value) * 5214.285714
            }else if (toUnit === 'month'){
                convertedTime = (value) * 1200
            }else if (toUnit === 'year'){
                convertedTime = (value) * 100
            }else if (toUnit === 'decade'){
                convertedTime = (value) * 10
            }

        } else if (fromUnit === 'hour'){
            if (toUnit === 'century') {
                convertedTime = (value) * .000001141552511
            } else if (toUnit === 'hour') {
                convertedTime = parseFloat(value) 
            } else if (toUnit === 'minute') {
                convertedTime = (value) * 60
            } else if (toUnit === 'milliseconds'){
                convertedTime = (value) * 3600000
            } else if (toUnit === 'millenium'){
                convertedTime = (value) * .0000001141552511
            }else if (toUnit === 'seconds'){
                convertedTime = (value) * 3600
            }else if (toUnit === 'day'){
                convertedTime = (value) * .04166666667
            }else if (toUnit === 'month'){
                convertedTime = (value) * .001369863014
            }else if (toUnit === 'year'){
                convertedTime = (value) * .0001141552511
            }else if (toUnit === 'week'){
                convertedTime = (value) * .005952380952
            }else if (toUnit === 'decade'){
                convertedTime = (value) * .00001141552511
            }


        } else if (fromUnit === 'millenium') {
            if (toUnit === 'century') {
                convertedTime = (value) * 10
            } else if (toUnit === 'hour') {
                convertedTime = (value) * 8760000
            } else if (toUnit === 'minute') {
                convertedTime = (value) * 525600000
            } else if (toUnit === 'milliseconds'){
                convertedTime = (value) * 31536000000000
            } else if (toUnit === 'millenium'){
                convertedTime = parseFloat(value)
            }else if (toUnit === 'seconds'){
                convertedTime = (value) * 31536000000
            }else if (toUnit === 'day'){
                convertedTime = (value) * 365000
            }else if (toUnit === 'week'){
                convertedTime = (value) *52142.85714
            }else if (toUnit === 'month'){
                convertedTime = (value) *12000
            }else if (toUnit === 'year'){
                convertedTime = (value) * 1000
            }else if (toUnit === 'decade'){
                convertedTime = (value) * 100
            }

        } else if (fromUnit === 'minute') {
            if (toUnit === 'century') {
                convertedTime = (value) * .00000001902587519
            } else if (toUnit === 'hour') {
                convertedTime = (value) * .01666666667
            } else if (toUnit === 'minute') {
                convertedTime = parseFloat(value)
            } else if (toUnit === 'milliseconds'){
                convertedTime = (value) * 60000
            } else if (toUnit === 'millenium'){
                convertedTime = (value) * .0000001902587519
            }else if (toUnit === 'seconds'){
                convertedTime = (value) * 60
            }else if (toUnit === 'day'){
                convertedTime = (value) * .0006944444444
            }else if (toUnit === 'week'){
                convertedTime = (value) * .00009920634921
            }else if (toUnit === 'month'){
                convertedTime = (value) * .00002283105023
            }else if (toUnit === 'year'){
                convertedTime = (value) * .000001902587519
            }else if (toUnit === 'decade'){
                convertedTime = (value) * .0000001902587519
            }

        }else if (fromUnit === 'milliseconds') {
            if (toUnit === 'century') {
                convertedTime = (value) * .0000000000003170979198
            } else if (toUnit === 'hour') {
                convertedTime = (value) * 0.000000277777778
            } else if (toUnit === 'minute') {
                convertedTime = (value) * .00001666666667
            } else if (toUnit === 'milliseconds'){
                convertedTime = parseFloat(value) 
            } else if (toUnit === 'millenium'){
                convertedTime = (value) * .00000000000003170979198
            }else if (toUnit === 'seconds'){
                convertedTime = (value) * .001
            }else if (toUnit === 'day'){
                convertedTime = (value) *.00000001157407407
            }else if (toUnit === 'week'){
                convertedTime = (value) * .000000001653439153
            }else if (toUnit === 'month'){
                convertedTime = (value) * .0000000003805175038
            }else if (toUnit === 'year'){
                convertedTime = (value) * .00000000003170979198
            }else if (toUnit === 'decade'){
                convertedTime = (value) * .000000000003170979198
            }

        }else if (fromUnit === 'seconds') {
          if (toUnit === 'century') {
              convertedTime = (value) * .0000000003170979198
          } else if (toUnit === 'hour') {
              convertedTime = (value) * 0.000277777778
          } else if (toUnit === 'minute') {
              convertedTime = (value) * .01666666667
          } else if (toUnit === 'seconds'){
              convertedTime = parseFloat(value) 
          } else if (toUnit === 'millenium'){
              convertedTime = (value) * .00000000003170979198
          }else if (toUnit === 'seconds'){
              convertedTime = (value) * 1000
          }else if (toUnit === 'day'){
              convertedTime = (value) *.00001157407407
          }else if (toUnit === 'week'){
              convertedTime = (value) * .000001653439153
          }else if (toUnit === 'month'){
              convertedTime = (value) * .0000003805175038
          }else if (toUnit === 'year'){
              convertedTime = (value) * .00000003170979198
          }else if (toUnit === 'decade'){
              convertedTime = (value) * .000000003170979198
          }

        }else if (fromUnit === 'day') {
            if (toUnit === 'century') {
                convertedTime = (value) * .00002739726027
            } else if (toUnit === 'hour') {
                convertedTime = (value) * 24
            } else if (toUnit === 'minute') {
                convertedTime = (value) * 1440
            } else if (toUnit === 'milliseconds'){
                convertedTime = (value) * 86400000
            } else if (toUnit === 'millenium'){
                convertedTime = (value) * .000002739726027
            }else if (toUnit === 'seconds'){
                convertedTime = (value) *86400
            }else if (toUnit === 'day'){
                convertedTime = parseFloat(value) 
            }else if (toUnit === 'week'){
                convertedTime = (value) * .01428571429
            }else if (toUnit === 'month'){
                convertedTime = (value)* .03287671233
            }else if (toUnit === 'year'){
                convertedTime = (value) * .002739726027
            }else if (toUnit === 'decade'){
                convertedTime = (value) * .0002739726027
            }

        }else if (fromUnit === 'week') {
            if (toUnit === 'century') {
                convertedTime = (value) * .00001917808219
            } else if (toUnit === 'hour') {
                convertedTime = (value) * 168
            } else if (toUnit === 'minute') {
                convertedTime = (value) * 10080
            } else if (toUnit === 'milliseconds'){
                convertedTime = (value) * 604800000
            } else if (toUnit === 'millenium'){
                convertedTime = (value) * .000001917808219
            }else if (toUnit === 'seconds'){
                convertedTime = (value) * 604800
            }else if (toUnit === 'day'){
                convertedTime = (value) * .8928571429
            }else if (toUnit === 'week'){
                convertedTime = parseFloat(value)
            }else if (toUnit === 'month'){
                convertedTime = (value) * .2301369863
            }else if (toUnit === 'year'){
                convertedTime = (value) * .01917808219
            }else if (toUnit === 'decade'){
                convertedTime = (value) * .001917808219
            }

        }else if (fromUnit === 'month') {
            if (toUnit === 'century') {
                convertedTime = (value) * .0008333333333
            } else if (toUnit === 'hour') {
                convertedTime = (value) * 730
            } else if (toUnit === 'minute') {
                convertedTime = (value) * 43800
            } else if (toUnit === 'milliseconds'){
                convertedTime = (value) * 2628000000
            } else if (toUnit === 'millenium'){
                convertedTime = (value) * .00008333333333
            }else if (toUnit === 'seconds'){
                convertedTime = (value) * 2628000
            }else if (toUnit === 'day'){
                convertedTime = (value) * 30.41666667
            }else if (toUnit === 'week'){
                convertedTime = (value)* 4.345238095
            }else if (toUnit === 'month'){
                convertedTime = parseFloat(value)
            }else if (toUnit === 'year'){
                convertedTime = (value) * .083333333333
            }else if (toUnit === 'decade'){
                convertedTime = (value) * .0083333333333
            }


        }else if (fromUnit === 'year') {
            if (toUnit === 'century') {
                convertedTime = (value) * .01
            } else if (toUnit === 'hour') {
                convertedTime = (value) * 8760
            } else if (toUnit === 'minute') {
                convertedTime = (value) * 525600
            } else if (toUnit === 'milliseconds'){
                convertedTime = (value) * 31536000000
            } else if (toUnit === 'millenium'){
                convertedTime = (value) * .001
            }else if (toUnit === 'seconds'){
                convertedTime = (value) * 31536000
            }else if (toUnit === 'day'){
                convertedTime = (value) * 365
            }else if (toUnit === 'week'){
                convertedTime = (value) * 52.14285714
            }else if (toUnit === 'month'){
                convertedTime = (value) * 12
            }else if (toUnit === 'year'){
                convertedTime = parseFloat(value) 
            }else if (toUnit === 'decade'){
                convertedTime = (value) * .1
            }


        }else if (fromUnit === 'decade') {
            if (toUnit === 'century') {
                convertedTime = (value) * .1
            } else if (toUnit === 'hour') {
                convertedTime = (value) * 87600
            } else if (toUnit === 'minute') {
                convertedTime = (value) * 5256000
            } else if (toUnit === 'milliseconds'){
                convertedTime = (value) * 315360000000
            } else if (toUnit === 'millenium'){
                convertedTime = (value) * .001
            }else if (toUnit === 'seconds'){
                convertedTime = (value) * 315360000
            }else if (toUnit === 'day'){
                convertedTime = (value) * 3650
            }else if (toUnit === 'week'){
                convertedTime = (value) * 521.4285714
            }else if (toUnit === 'month'){
                convertedTime = (value) * 120
            }else if (toUnit === 'year'){
                convertedTime = (value) * 10
            }else if (toUnit === 'decade'){
                convertedTime = parseFloat(value)
            }
        }
         if (!isNaN(convertedTime)) {
        setConvertedValue(convertedTime.toFixed(10));
      } else {
        setConvertedValue('');
      }
    }


    return (
        <div>
          <div className='title-con'>
          <span className= "title">Time</span>
          <span className= "title">Conversion</span>
          </div>
          <div>
          <div className='temperature-container'>
          <div className='quadrant1'>
            <label className='label'>
              From:
              <select className ='select' value={leftUnit} onChange={(e) => handleLeftUnitChange(e.target.value)}>
              <option value= 'century' > century</option>
              <option value="millenium">Millennium</option>
                  <option value="century">Century</option>
                  <option value="decade">Decade</option>
                  <option value="year">Year</option>
                  <option value="month">Month</option>
                  <option value="week">Week</option>
                  <option value="day">Day</option>
                  <option value="hours">Hours</option>
                  <option value="minutes">Minutes</option>
                  <option value="seconds">Seconds</option>
                  <option value="milliseconds">Millisecond</option>
              </select>
            </label>
          </div>
          <div className='quadrant2'>
            <label className='label'>
              To:
              <select className='select' value={rightUnit} onChange={(e) => handleRightUnitChange(e.target.value)}>
              <option value= 'century' > century</option>
              <option value="millenium">Millennium</option>
                  <option value="century">Century</option>
                  <option value="decade">Decade</option>
                  <option value="year">Year</option>
                  <option value="month">Month</option>
                  <option value="week">Week</option>
                  <option value="day">Day</option>
                  <option value="hours">Hours</option>
                  <option value="minutes">Minutes</option>
                  <option value="seconds">Seconds</option>
                  <option value="milliseconds">Millisecond</option>
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
    
    export default TimeCon;