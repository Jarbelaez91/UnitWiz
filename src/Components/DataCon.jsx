import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./tempcon.css"

const DataCon = () => {

const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/');

  }
  const [leftUnit, setLeftUnit] = useState('bit');
  const [rightUnit, setRightUnit] = useState('byte');
  const [inputValue, setInputValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);
    convertData(value, leftUnit, rightUnit);
  };

  const handleLeftUnitChange = (unit) => {
    setLeftUnit(unit);
    convertData(inputValue, unit, rightUnit);
  };

  const handleRightUnitChange = (unit) => {
    setRightUnit(unit);
    convertData(inputValue, leftUnit, unit);
  };

  const convertData = (value, fromUnit, toUnit) => {
    if (!value.trim()) {
      setConvertedValue('');
      return;
    }

    let convertedData;
    if (fromUnit === 'bit') {
      if (toUnit === 'byte') {
        convertedData = (value) * .125;
      } else if (toUnit === 'kilobyte') {
        convertedData = (value)* .0001220703125;
      } else if (toUnit === 'megabyte') {
        convertedData = (value) * .0000001192092896;
      } else if (toUnit === 'bit') {
        convertedData = parseFloat(value)
      }
      else if (toUnit === 'gigabyte') {
        convertedData = (value) * .0000000001164153218;
      }else if (toUnit === 'terabyte') {
          convertedData = (value) * .0000000000001136868377;
      }

    } else if (fromUnit === 'byte') {
      if (toUnit === 'bit') {
        convertedData = value * 8 
      } else if (toUnit === 'kilobyte') {
        convertedData = value * .0009765625 ;
      } else if (toUnit === 'megabyte') {
        convertedData = (value) * .0000009536743164;
    } else if (toUnit === 'byte') {
        convertedData = parseFloat(value)
      }
      else if (toUnit === 'gigabyte') {
        convertedData = (value) * .0000000009313225746;
      }else if (toUnit === 'terabyte') {
          convertedData = (value) * .0000000000009094947018;
      }

    } else if (fromUnit === 'kilobyte') {
      if (toUnit === 'bit') {
        convertedData = value * 8192;
      } else if (toUnit === 'byte') {
        convertedData = value * 1024;
      } else if (toUnit === 'megabyte') {
        convertedData = value * .0009765625;
    } else if (toUnit === 'kilobyte') {
        convertedData = parseFloat(value)
      }
      else if (toUnit === 'gigabyte') {
        convertedData = (value) * .0000009536743164;
      }else if (toUnit === 'terabyte') {
          convertedData = (value) * .0000000009313225746;
      }


    } else if (fromUnit === 'megabyte') {
      if (toUnit === 'bit') {
        convertedData = value * 8388608 ;
      } else if (toUnit === 'byte') {
        convertedData = value * 1048576;
      } else if (toUnit === 'kilobyte') {
        convertedData = value * 1024;
    } else if (toUnit ==='megabyte' ) {
        convertedData = parseFloat(value)
      }
      else if (toUnit === 'gigabyte') {
        convertedData = (value) * .0009765625;
      }else if (toUnit === 'terabyte') {
          convertedData = (value) * .0000009536743164;
      }

      }else if (fromUnit === 'gigabyte') {
        if (toUnit === 'bit') {
          convertedData = value * 8589934592 ;
        } else if (toUnit === 'byte') {
          convertedData = value * 1073741824;
        } else if (toUnit === 'kilobyte') {
          convertedData = value * 1048576;
      } else if (toUnit ==='gigabyte' ) {
          convertedData = parseFloat(value)
        }
        else if (toUnit === 'megabyte') {
          convertedData = (value) * 1024;
        }else if (toUnit === 'terabyte') {
            convertedData = (value) * .0009765625;
        }

        }else if (fromUnit === 'terabyte') {
          if (toUnit === 'bit') {
            convertedData = value * 8796093022000 ;
          } else if (toUnit === 'byte') {
            convertedData = value * 1099511628000;
          } else if (toUnit === 'kilobyte') {
            convertedData = value * 1073741824;
        } else if (toUnit ==='terabyte' ) {
            convertedData = parseFloat(value)
          }
          else if (toUnit === 'gigabyte') {
            convertedData = (value) * 1024;
          }else if (toUnit === 'megabyte') {
              convertedData = (value) * 1048576;
          }

    }
    if (!isNaN(convertedData)) {
        setConvertedValue(convertedData.toFixed(2));
      } else {
        setConvertedValue('');
      }
    };
      

  return (
    <div>
      <div className='title-con'>
      <span className= "title">Temperature</span>
      <span className= "title">Conversion</span>
      </div>
      <div>
      <div className='temperature-container'>
      <div className='quadrant1'>
        <label className='label'>
          From:
          <select className ='select' value={leftUnit} onChange={(e) => handleLeftUnitChange(e.target.value)}>
            <option value="bit">bit</option>
            <option value="byte">byte</option>
            <option value="kilobyte">kilobyte</option>
            <option value="megabyte">megabyte</option>
          </select>
        </label>
      </div>
      <div className='quadrant2'>
        <label className='label'>
          To:
          <select className='select' value={rightUnit} onChange={(e) => handleRightUnitChange(e.target.value)}>
            <option value="bit">bit</option>
            <option value="byte">byte</option>
            <option value="kilobyte">kilobyte</option>
            <option value="megabyte">megabyte</option>
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

export default DataCon;


