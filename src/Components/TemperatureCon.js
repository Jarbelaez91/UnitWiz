import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TimeCon.css';

const TemperatureCon = () => {

const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/');

  }
  const [leftUnit, setLeftUnit] = useState('celsius');
  const [rightUnit, setRightUnit] = useState('fahrenheit');
  const [inputValue, setInputValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);
    convertTemperature(value, leftUnit, rightUnit);
  };

  const handleLeftUnitChange = (unit) => {
    setLeftUnit(unit);
    convertTemperature(inputValue, unit, rightUnit);
  };

  const handleRightUnitChange = (unit) => {
    setRightUnit(unit);
    convertTemperature(inputValue, leftUnit, unit);
  };

  const convertTemperature = (value, fromUnit, toUnit) => {
    if (!value.trim()) {
      setConvertedValue('');
      return;
    }

    let convertedTemp;
    if (fromUnit === 'celsius') {
      if (toUnit === 'fahrenheit') {
        convertedTemp = (value * 9) / 5 + 32;
      } else if (toUnit === 'kelvin') {
        convertedTemp = parseFloat(value) + 273.15;
      } else if (toUnit === 'rankine') {
        convertedTemp = (parseFloat(value) + 273.15) * (9 / 5);
      } else if (toUnit === 'celsius') {
        convertedTemp = parseFloat(value)
      }

    } else if (fromUnit === 'fahrenheit') {
      if (toUnit === 'celsius') {
        convertedTemp = ((value - 32) * 5) / 9;
      } else if (toUnit === 'kelvin') {
        convertedTemp = ((value - 32) * 5) / 9 + 273.15;
      } else if (toUnit === 'rankine') {
        convertedTemp = (parseFloat(value) + 459.67);
    } else if (toUnit === 'fahrenheit') {
        convertedTemp = parseFloat(value)
      }

    } else if (fromUnit === 'kelvin') {
      if (toUnit === 'celsius') {
        convertedTemp = value - 273.15;
      } else if (toUnit === 'fahrenheit') {
        convertedTemp = (value - 273.15) * (9 / 5) + 32;
      } else if (toUnit === 'rankine') {
        convertedTemp = value * (9 / 5);
    } else if (toUnit === 'kevlin') {
        convertedTemp = parseFloat(value)
      }


    } else if (fromUnit === 'rankine') {
      if (toUnit === 'celsius') {
        convertedTemp = (value - 491.67) * (5 / 9);
      } else if (toUnit === 'fahrenheit') {
        convertedTemp = value - 459.67;
      } else if (toUnit === 'kelvin') {
        convertedTemp = value * (5 / 9);
    } else if (toUnit ==='rankine' ) {
        convertedTemp = parseFloat(value)
      }

    }
    if (!isNaN(convertedTemp)) {
        setConvertedValue(convertedTemp.toFixed(2));
      } else {
        setConvertedValue('');
      }
    };
      

  return (
    <div>
      <h2>Temperature Conversion</h2>
      <div>
        <label>
          From:
          <select value={leftUnit} onChange={(e) => handleLeftUnitChange(e.target.value)}>
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
            <option value="rankine">Rankine</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          To:
          <select value={rightUnit} onChange={(e) => handleRightUnitChange(e.target.value)}>
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
            <option value="rankine">Rankine</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Input Value:
          <input
            type="number"
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Converted Value:
          <input
            type="number"
            value={convertedValue}
            readOnly
          />
        </label>
        <div>
          <button onClick={handleBackButtonClick}>Back to Homepage</button>
        </div>
      </div>
    </div>
  );
};

export default TemperatureCon;














// // import React, { useState } from 'react';

// // const TemperatureCon = () => {
// //   const [celsius, setCelsius] = useState('');
// //   const [fahrenheit, setFahrenheit] = useState('');
// //   const [kelvin, setKelvin] = useState('');

// //   const handleCelsiusChange = (value) => {
// //     setCelsius(value);
// //     // Convert Celsius to Fahrenheit
// //     const fahrenheitValue = (value * 9) / 5 + 32;
// //     setFahrenheit(fahrenheitValue.toFixed(2));
// //     // Convert Celsius to Kelvin
// //     const kelvinValue = value + 273.15;
// //     setKelvin(kelvinValue.toFixed(2));
// //   };

// //   const handleFahrenheitChange = (value) => {
// //     setFahrenheit(value);
// //     // Convert Fahrenheit to Celsius
// //     const celsiusValue = ((value - 32) * 5) / 9;
// //     setCelsius(celsiusValue.toFixed(2));
// //     // Convert Fahrenheit to Kelvin
// //     const kelvinValue = ((value - 32) * 5) / 9 + 273.15;
// //     setKelvin(kelvinValue.toFixed(2));
// //   };

// //   const handleKelvinChange = (value) => {
// //     setKelvin(value);
// //     // Convert Kelvin to Celsius
// //     const celsiusValue = value - 273.15;
// //     setCelsius(celsiusValue.toFixed(2));
// //     // Convert Kelvin to Fahrenheit
// //     const fahrenheitValue = ((value - 273.15) * 9) / 5 + 32;
// //     setFahrenheit(fahrenheitValue.toFixed(2));
// //   };

// //   return (
// //     <div>
// //       <h2>Temperature Conversion</h2>
// //       <div>
// //         <label>
// //           Celsius:
// //           <input
// //             type="number"
// //             value={celsius}
// //             onChange={(e) => handleCelsiusChange(e.target.value)}
// //           />
// //         </label>
// //       </div>
// //       <div>
// //         <label>
// //           Fahrenheit:
// //           <input
// //             type="number"
// //             value={fahrenheit}
// //             onChange={(e) => handleFahrenheitChange(e.target.value)}
// //           />
// //         </label>
// //       </div>
// //       <div>
// //         <label>
// //           Kelvin:
// //           <input
// //             type="number"
// //             value={kelvin}
// //             onChange={(e) => handleKelvinChange(e.target.value)}
// //           />
// //         </label>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TemperatureCon;











// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './TimeCon.css';

// const TemperatureCon = () => {
//   const navigate = useNavigate();

//   const handleBackButtonClick = () => {
//     navigate('/');
//   };

//   const [selectedUnitLeft, setSelectedUnitLeft] = useState('celsius');
//   const [selectedUnitRight, setSelectedUnitRight] = useState('fahrenheit');
//   const [inputValueLeft, setInputValueLeft] = useState('');
//   const [conversionResult, setConversionResult] = useState('');
  
//   const leftColumnRef = useRef();
//   const rightColumnRef = useRef();

//   useEffect(() => {
//     const updateConversionResult = () => {
//       const value = parseFloat(inputValueLeft);

//       if (!isNaN(value)) {
//         const conversion = calculateConversion(value, selectedUnitLeft, selectedUnitRight);
//         setConversionResult(conversion);
//       } else {
//         setConversionResult('');
//       }
//     };

//     updateConversionResult();
//   }, [selectedUnitLeft, selectedUnitRight, inputValueLeft]);

//   const unitsInCelsius = {
//     rankine: 1.8 + 491.67,
//     kelvin: 273.15,
//     fahrenheit: 32,
//     celsius: 1,
//   };
  
//   const calculateConversion = (value, fromUnit, toUnit) => {
//     const valueInCelsius = (value - unitsInCelsius[fromUnit]) / unitsInCelsius.celsius;
//     return (valueInCelsius * unitsInCelsius[toUnit] + unitsInCelsius[toUnit]).toFixed(2);
//   };
  
  

//   const handleLeftColumnScroll = (e) => {
//     const scrollTop = e.target.scrollTop;
//     const unitHeight = e.target.scrollHeight / 4; 

//     const index = Math.floor(scrollTop / unitHeight);
//     const units = ['celsius', 'fahrenheit', 'kelvin', 'rankine']

//     setSelectedUnitLeft(units[index]);
//   };

//   const handleRightColumnScroll = (e) => {
//     const scrollTop = e.target.scrollTop;
//     const unitHeight = e.target.scrollHeight / 4; 

//     const index = Math.floor(scrollTop / unitHeight);
//     const units = ['celsius', 'fahrenheit', 'kelvin', 'rankine']

//     setSelectedUnitRight(units[index]);
//   };

//   return (
//     <div>
//       <div>
//         <h2>Temperature Conversion</h2>
//         <div className="container">
//           <div className="column left-column" ref={leftColumnRef} onScroll={handleLeftColumnScroll}>
//             <div>
//               <label>
//                 Select Unit:
//                 <select
//                   value={selectedUnitLeft}
//                   onChange={(e) => setSelectedUnitLeft(e.target.value)}
//                 >
//                   <option value="celsius">Celsius</option>
//                   <option value="fahrenheit">Fahrenheit</option>
//                   <option value="kelvin">Kelvin</option>
//                   <option value="rankine">Rankine</option>
//                 </select>
//               </label>
//             </div>
//             <div>
//               <label>
//                 Input Value:
//                 <input
//                   type="number"
//                   value={inputValueLeft}
//                   onChange={(e) => setInputValueLeft(e.target.value)}
//                 />
//               </label>
//             </div>
//           </div>
//           <div className="column right-column" ref={rightColumnRef} onScroll={handleRightColumnScroll}>
//             <div>
//               <label>
//                 Select Unit:
//                 <select
//                   value={selectedUnitRight}
//                   onChange={(e) => setSelectedUnitRight(e.target.value)}
//                 >
//                   <option value="celsius">Celsius</option>
//                   <option value="fahrenheit">Fahrenheit</option>
//                   <option value="kelvin">Kelvin</option>
//                   <option value="rankine">Rankine</option>
//                 </select>
//               </label>
//             </div>
//           </div>
//         </div>
//         <div>
//         <label>
//           Conversion Result:
//           <input
//             type="text"
//             value={conversionResult}
//             readOnly
//           />
//         </label>
//       </div>
//         <div>
//           <button onClick={handleBackButtonClick}>Back to Homepage</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TemperatureCon;