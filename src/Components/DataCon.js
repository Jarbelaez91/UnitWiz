import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TimeCon.css';

const DataCon = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/');
  };

  const [selectedUnitLeft, setSelectedUnitLeft] = useState('bit');
  const [selectedUnitRight, setSelectedUnitRight] = useState('byte');
  const [inputValueLeft, setInputValueLeft] = useState('');
  const [conversionResult, setConversionResult] = useState('');
  
  const leftColumnRef = useRef();
  const rightColumnRef = useRef();

  useEffect(() => {
    const updateConversionResult = () => {
      const value = parseFloat(inputValueLeft);

      if (!isNaN(value)) {
        const conversion = calculateConversion(value, selectedUnitLeft, selectedUnitRight);
        setConversionResult(conversion);
      } else {
        setConversionResult('');
      }
    };

    updateConversionResult();
  }, [selectedUnitLeft, selectedUnitRight, inputValueLeft]);

  const calculateConversion = (value, fromUnit, toUnit) => {
    const unitsInBytes = {
      terabyte: 1099511627776,
      gigabyte: 1073741824,
      megabyte: 1048576,
      kilobyte: 1024,
      byte: 1,
      bit: 1 / 8,
    };

    const valueInBytes = value * unitsInBytes[fromUnit];
    return (valueInBytes / unitsInBytes[toUnit]).toFixed(10);
  };

  const handleLeftColumnScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const unitHeight = e.target.scrollHeight / 6; 

    const index = Math.floor(scrollTop / unitHeight);
    const units = ['bit', 'byte', 'kilobyte', 'megabyte', 'gigabyte', 'terabyte']

    setSelectedUnitLeft(units[index]);
  };

  const handleRightColumnScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const unitHeight = e.target.scrollHeight / 6; 

    const index = Math.floor(scrollTop / unitHeight);
    const units = ['bit', 'byte', 'kilobyte', 'megabyte', 'gigabyte', 'terabyte'];

    setSelectedUnitRight(units[index]);
  };

  return (
    <div>
      <div>
        <h2>Data Conversion</h2>
        <div className="container">
          <div className="column left-column" ref={leftColumnRef} onScroll={handleLeftColumnScroll}>
            <div>
              <label>
                Select Unit:
                <select
                  value={selectedUnitLeft}
                  onChange={(e) => setSelectedUnitLeft(e.target.value)}
                >
                  <option value="bit">Bit</option>
                  <option value="byte">Byte</option>
                  <option value="kilobyte">Kilobyte</option>
                  <option value="megabyte">Megabyte</option>
                  <option value="gigabyte">Gigabyte</option>
                  <option value="terabyte">Terabyte</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Input Value:
                <input
                  type="number"
                  value={inputValueLeft}
                  onChange={(e) => setInputValueLeft(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="column right-column" ref={rightColumnRef} onScroll={handleRightColumnScroll}>
            <div>
              <label>
                Select Unit:
                <select
                  value={selectedUnitRight}
                  onChange={(e) => setSelectedUnitRight(e.target.value)}
                >
                   <option value="bit">Bit</option>
                  <option value="byte">Byte</option>
                  <option value="kilobyte">Kilobyte</option>
                  <option value="megabyte">Megabyte</option>
                  <option value="gigabyte">Gigabyte</option>
                  <option value="terabyte">Terabyte</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div>
        <label>
          Conversion Result:
          <input
            type="text"
            value={conversionResult}
            readOnly
          />
        </label>
      </div>
        <div>
          <button onClick={handleBackButtonClick}>Back to Homepage</button>
        </div>
      </div>
    </div>
  );
};

export default DataCon;