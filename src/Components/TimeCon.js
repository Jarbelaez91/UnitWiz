import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TimeCon.css';

const TimeCon = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/');
  };

  const [selectedUnitLeft, setSelectedUnitLeft] = useState('hours');
  const [selectedUnitRight, setSelectedUnitRight] = useState('minutes');
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
    const unitsInMinutes = {
      millenium: 525600000,
      century: 52560000,
      decade: 5256000,
      year: 525600,
      month: 43800,
      week: 10080,
      day: 1440,
      hours: 60,
      minutes: 1,
      seconds: 1 / 60,
      milliseconds: 1 / 60000,
    };

    const valueInMinutes = value * unitsInMinutes[fromUnit];
    return (valueInMinutes / unitsInMinutes[toUnit]).toFixed(10);
  };

  const handleLeftColumnScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const unitHeight = e.target.scrollHeight / 11; // Number of units

    const index = Math.floor(scrollTop / unitHeight);
    const units = ['millenium', 'century', 'decade', 'year', 'month', 'week', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'];

    setSelectedUnitLeft(units[index]);
  };

  const handleRightColumnScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const unitHeight = e.target.scrollHeight / 11; // Number of units

    const index = Math.floor(scrollTop / unitHeight);
    const units = ['millenium', 'century', 'decade', 'year', 'month', 'week', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'];

    setSelectedUnitRight(units[index]);
  };

  return (
    <div>
      <div>
        <h2>Time Conversion</h2>
        <div className="container">
          <div className="column left-column" ref={leftColumnRef} onScroll={handleLeftColumnScroll}>
            <div>
              <label>
                {/* Scrollable input for selecting units */}
                Select Unit:
                <select
                  value={selectedUnitLeft}
                  onChange={(e) => setSelectedUnitLeft(e.target.value)}
                >
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
            <div>
              <label>
                {/* Input for the selected unit */}
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
                {/* Scrollable input for selecting units */}
                Select Unit:
                <select
                  value={selectedUnitRight}
                  onChange={(e) => setSelectedUnitRight(e.target.value)}
                >
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
          </div>
        </div>
        <div>
        <label>
          {/* Input for displaying the conversion result (read-only) */}
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

export default TimeCon;











// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './TimeCon.css'



// const TimeCon = () => {
//   // Define the navigate function
//   const navigate = useNavigate();

//   // Add a function to handle the back button click
//   const handleBackButtonClick = () => {
//     // Navigate back to the homepage or any other route you desire
//     navigate('/');
//   };
//     const [inputValue, setInputValue] = useState('');
//     const [conversionResult, setConversionResult] = useState('');
//     const [millennium,setMillennium] = useState ('')
//     const [century, setCentury] = useState ('')
//     const [decade, setDecade] = useState ('')
//     const [calendarYear,setCalendarYear] = useState ('')
//     const [month, setMonth] = useState ('')
//     const [week, setWeek] = useState ('')
//     const [day,setDay] = useState ('')
//     const [hour, setHour] = useState ('')
//     const [minute, setMinute] = useState ('')
//     const [second,setSecond] = useState ('')
//     const [millisecond,setMillisecond] = useState ('')


// const handleMillenniumChange = (value) => {
//     setMillennium(value);
//     // Convert millennium to century
//     const centuryValue = (value * 10);
//     setCentury(centuryValue.toFixed(5));

//     // Convert millennium to decade
//     const decadeValue = value * 100;
//     setDecade(decadeValue.toFixed(5));

//     const calendarYearValue = value * 1000;
//     setCalendarYear(calendarYearValue.toFixed(5));

//     const monthValue = value * 12000;
//     setMonth(monthValue.toFixed(10));

//     const weekValue = value * 52142.85714;
//     setWeek(weekValue.toFixed(10));

//     const dayValue = value * 365000;
//     setDay(dayValue.toFixed(10));

//     const hourValue = value * 8760000;
//     setHour(hourValue.toFixed(10));

//     const minuteValue = value * 525600000;
//     setMinute(minuteValue.toFixed(10));

//     const secondValue = value * 31536000000;
//     setSecond(secondValue.toFixed(10));

//     const millisecondValue = value * 31536000000000;
//     setMillisecond(millisecondValue.toFixed(10));
//   };


//   const handleCenturyChange = (value) => {
//     setCentury(value);
//     // Convert century to millennium
//     const millenniumValue = (value / 10);
//     setMillennium(millenniumValue.toFixed(5));

//     const decadeValue = value * 10;
//     setDecade(decadeValue.toFixed(5));

//     const calendarYearValue = value * 100;
//     setCalendarYear(calendarYearValue.toFixed(5));

//     const monthValue = value * 1200;
//     setMonth(monthValue.toFixed(10));

//     const weekValue = value * 5214.285714;
//     setWeek(weekValue.toFixed(10));

//     const dayValue = value * 36500;
//     setDay(dayValue.toFixed(10));

//     const hourValue = value * 876000;
//     setHour(hourValue.toFixed(10));

//     const minuteValue = value * 52560000;
//     setMinute(minuteValue.toFixed(10));

//     const secondValue = value * 3153600000;
//     setSecond(secondValue.toFixed(10));

//     const millisecondValue = value * 3153600000000;
//     setMillisecond(millisecondValue.toFixed(10));
//   };


//   const handleDecadeChange = (value) => {
//     setDecade(value);
    
//     const centuryValue = (value / 10);
//     setCentury(centuryValue.toFixed(5));

    
//     const millenniumValue = value / 100;
//     setMillennium(millenniumValue.toFixed(5));

//     const calendarYearValue = value * 10;
//     setCalendarYear(calendarYearValue.toFixed(5));

//     const monthValue = value * 120;
//     setMonth(monthValue.toFixed(10));

//     const weekValue = value * 521.4285714;
//     setWeek(weekValue.toFixed(10));

//     const dayValue = value * 3650;
//     setDay(dayValue.toFixed(10));

//     const hourValue = value * 87600;
//     setHour(hourValue.toFixed(10));

//     const minuteValue = value * 5256000;
//     setMinute(minuteValue.toFixed(10));

//     const secondValue = value * 315360000;
//     setSecond(secondValue.toFixed(10));

//     const millisecondValue = value * 315360000000;
//     setMillisecond(millisecondValue.toFixed(10));
//   };


//   const handleCalendarYearChange = (value) => {
//     setCalendarYear(value);

//     const centuryValue = (value / 100);
//     setCentury(centuryValue.toFixed(5));

    
//     const decadeValue = value / 10;
//     setDecade(decadeValue.toFixed(5));

//     const millenniumValue = value / 1000;
//     setMillennium(millenniumValue.toFixed(5));

//     const monthValue = value * 12;
//     setMonth(monthValue.toFixed(10));

//     const weekValue = value * 52.14285714;
//     setWeek(weekValue.toFixed(10));

//     const dayValue = value * 365;
//     setDay(dayValue.toFixed(10));

//     const hourValue = value * 8760;
//     setHour(hourValue.toFixed(10));

//     const minuteValue = value * 525600;
//     setMinute(minuteValue.toFixed(10));

//     const secondValue = value * 31536000;
//     setSecond(secondValue.toFixed(10));

//     const millisecondValue = value * 31536000000;
//     setMillisecond(millisecondValue.toFixed(10));
//   };


//   const handleMonthChange = (value) => {
//     setMonth(value);
    
//     const centuryValue = (value / 12) / 100;
//     setCentury(centuryValue.toFixed(5));

   
//     const decadeValue = (value / 12) / 10;
//     setDecade(decadeValue.toFixed(5));

//     const calendarYearValue = value / 12;
//     setCalendarYear(calendarYearValue.toFixed(5));

//     const millenniumValue = (value / 12) / 1000;
//     setMillennium(millenniumValue.toFixed(10));

//     const weekValue = value * 4.345238095;
//     setWeek(weekValue.toFixed(10));

//     const dayValue = value * 30.41666667;
//     setDay(dayValue.toFixed(10));

//     const hourValue = value * 730;
//     setHour(hourValue.toFixed(10));

//     const minuteValue = value * 43800;
//     setMinute(minuteValue.toFixed(10));

//     const secondValue = value * 2628000;
//     setSecond(secondValue.toFixed(10));

//     const millisecondValue = value * 2628000000;
//     setMillisecond(millisecondValue.toFixed(10));
//   };


//   const handleWeekChange = (value) => {
//     setWeek(value);
    
//     const centuryValue = (value / 52.14285714) / 100;
//     setCentury(centuryValue.toFixed(5));

   
//     const decadeValue = (value / 52.14285714) / 10;
//     setDecade(decadeValue.toFixed(5));

//     const calendarYearValue = value / 52.14285714;
//     setCalendarYear(calendarYearValue.toFixed(5));

//     const millenniumValue = (value / 52.14285714) / 1000;
//     setMillennium(millenniumValue.toFixed(10));

//     const monthValue = value / 4.345238095;
//     setMonth(monthValue.toFixed(10));

//     const dayValue = value * 7;
//     setDay(dayValue.toFixed(10));

//     const hourValue = value * 168;
//     setHour(hourValue.toFixed(10));

//     const minuteValue = value * 10080;
//     setMinute(minuteValue.toFixed(10));

//     const secondValue = value * 604800;
//     setSecond(secondValue.toFixed(10));

//     const millisecondValue = value * 604800000;
//     setMillisecond(millisecondValue.toFixed(10));
//   };


//   const handleDayChange = (value) => {
//     setDay(value);

//     const centuryValue = value / (365 * 100);
//     setCentury(centuryValue.toFixed(5));

//     const decadeValue = value / 3650;
//     setDecade(decadeValue.toFixed(5));

//     const weekValue = value / 7;
//     setWeek(weekValue.toFixed(10));

//     const millenniumValue = value / 365000;
//     setMillennium(millenniumValue.toFixed(10));

//     const monthValue = (value * 12) / 365;
//     setMonth(monthValue.toFixed(10));

//     const calendarYearValue = value / 365;
//     setCalendarYear(calendarYearValue.toFixed(10));

//     const hourValue = value * 24;
//     setHour(hourValue.toFixed(10));

//     const minuteValue = value * 1440;
//     setMinute(minuteValue.toFixed(10));

//     const secondValue = value * 86400;
//     setSecond(secondValue.toFixed(10));

//     const millisecondValue = value * 86400000;
//     setMillisecond(millisecondValue.toFixed(10));
// };



//   const handleHourChange = (value) => {
//     setHour(value);

//     const centuryValue = value / (24 * 365 * 100);
//     setCentury(centuryValue.toFixed(13));

//     const decadeValue = value / (24 * 365 * 10);
//     setDecade(decadeValue.toFixed(13));

//     const weekValue = value / 168;
//     setWeek(weekValue.toFixed(10));

//     const millenniumValue = value / (24 * 365 * 1000);
//     setMillennium(millenniumValue.toFixed(10));

//     const monthValue = value / 24 / (365 / 12);
//     setMonth(monthValue.toFixed(10));

//     const calendarYearValue = value / 24 / 365;
//     setCalendarYear(calendarYearValue.toFixed(10));

//     const dayValue = value * 0.0416667;
//     setDay(dayValue.toFixed(10));

//     const minuteValue = value * 60;
//     setMinute(minuteValue.toFixed(10));

//     const secondValue = value * 3600;
//     setSecond(secondValue.toFixed(10));

//     const millisecondValue = value * 3600000;
//     setMillisecond(millisecondValue.toFixed(10));
// };



// const handleMinuteChange = (value) => {
//     setMinute(value);

//     const centuryValue = value / (60 * 24 * 365 * 100);
//     setCentury(centuryValue.toFixed(5));

//     const decadeValue = value / (60 * 24 * 365 * 10);
//     setDecade(decadeValue.toFixed(5));

//     const weekValue = value / (60 * 168);
//     setCalendarYear(weekValue.toFixed(5));

//     const millenniumValue = value / (60 * 24 * 365 * 1000);
//     setMillennium(millenniumValue.toFixed(10));

//     const monthValue = value / 60 / 24 / (365 /12);
//     setMonth(monthValue.toFixed(10));

//     const calendarYearValue = value / 60 / 24 / 365;
//     setCalendarYear(calendarYearValue.toFixed(10));

//     const hourValue = value / 60;
//     setHour(hourValue.toFixed(10));

//     const secondValue = value * 60;
//     setSecond(secondValue.toFixed(10));

//     const millisecondValue = value * 60000;
//     setMillisecond(millisecondValue.toFixed(10));
// };


// const handleSecondChange = (value) => {
//     setSecond(value);

//     const centuryValue = value / (60 * 60 * 24 * 365 * 100);
//     setCentury(centuryValue.toFixed(5));

//     const decadeValue = value / (60 * 60 * 24 * 365 * 10);
//     setDecade(decadeValue.toFixed(5));

//     const weekValue = value / (60 * 60 * 168);
//     setWeek(weekValue.toFixed(5));

//     const millenniumValue = value / (60 * 60 * 24 * 365 * 1000);
//     setMillennium(millenniumValue.toFixed(10));

//     const monthValue = value / 60 / 60 / 24 / (365/12);
//     setMonth(monthValue.toFixed(10));

//     const calendarYearValue = value / (60 * 60 * 24 * 365);
//     setCalendarYear(calendarYearValue.toFixed(10));

//     const hourValue = value / 3600;
//     setHour(hourValue.toFixed(10));

//     const dayValue = value / 60 / 60 / 24;
//     setDay(dayValue.toFixed(10));

//     const minuteValue = value / 60;
//     setMinute(minuteValue.toFixed(10));

//     const millisecondValue = value * 1000;
//     setMillisecond(millisecondValue.toFixed(10));
// };


// const handleMillisecondChange = (value) => {
//     setMillisecond(value);

//     const centuryValue = value / (1000 * 60 * 60 * 24 * 365 * 100);
//     setCentury(centuryValue.toFixed(5));

//     const decadeValue = value / (1000 * 60 * 60 * 24 * 365 * 10);
//     setDecade(decadeValue.toFixed(5));

//     const weekValue = value / (1000 * 60 * 60 * 168);
//     setWeek(weekValue.toFixed(5));

//     const millenniumValue = value / (1000 * 60 * 60 * 24 * 365 * 1000);
//     setMillennium(millenniumValue.toFixed(10));

//     const monthValue = value / 1000 / 60 / 60 / 24 / (365 / 12);
//     setMonth(monthValue.toFixed(10));

//     const calendarYearValue = value / (1000 * 60 * 60 * 24 * 365);
//     setCalendarYear(calendarYearValue.toFixed(10));

//     const dayValue = value / 1000 / 60 / 60 / 24;
//     setDay(dayValue.toFixed(10));

//     const hourValue = value / 3600000;
//     setHour(hourValue.toFixed(10));

//     const minuteValue = value / 60000;
//     setMinute(minuteValue.toFixed(10));

//     const secondValue = value / 1000;
//     setSecond(secondValue.toFixed(10));
// };

// return (
//   <div>
//     <div>
//       <h2>Time Conversion</h2>
//       <div className="container">
//         <div className="column left-column">
//           {/* Left column content */}
//           <div>
//             <label>
//           Millennium:
//           <input
//             type="number"
//             id="millenniuminput"
//             value={millennium}
//             onChange={(e) => handleMillenniumChange(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Century:
//           <input
//             type="number"
//             id="centuryinput"
//             value={century}
//             onChange={(e) => handleCenturyChange(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Decade:
//           <input
//             type="number"
//             id="decadeinput"
//             value={decade}
//             onChange={(e) => handleDecadeChange(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Calendar Year:
//           <input
//             type="number"
//             id="yearinput"
//             value={calendarYear}
//             onChange={(e) => handleCalendarYearChange(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Month:
//           <input
//             type="number"
//             id="monthinput"
//             value={month}
//             onChange={(e) => handleMonthChange(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Week:
//           <input
//             type="number"
//             id="weekinput"
//             value={week}
//             onChange={(e) => handleWeekChange(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Day:
//           <input
//             type="number"
//             id="dayinput"
//             value={day}
//             onChange={(e) => handleDayChange(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Hour:
//           <input
//             type="number"
//             id="hourinput"
//             value={hour}
//             onChange={(e) => handleHourChange(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Minute:
//           <input
//             type="number"
//             id="minuteinput"
//             value={minute}
//             onChange={(e) => handleMinuteChange(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Second:
//           <input
//             type="number"
//             id="secondinput"
//             value={second}
//             onChange={(e) => handleSecondChange(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Millisecond:
//           <input
//             type="number"
//             id="millisecondinput"
//             value={millisecond}
//             onChange={(e) => handleMillisecondChange(e.target.value)}
//           />
//         </label>
//             </div>
//           </div>
//         </div>
//         <div className="column right-column">
//           {/* Right column content */}
//           {/* Display the converted values here */}
//         </div>
//       </div>
//       <div>
//         <button onClick={handleBackButtonClick}>Back to Homepage</button>
//       </div>
//       </div>
//   );
// };

// export default TimeCon;

