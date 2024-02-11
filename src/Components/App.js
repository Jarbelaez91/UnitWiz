// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import TimeCon from './TimeCon';
import DataCon from './DataCon';
import TemperatureCon from './TemperatureCon'
import Power from './Power'
import Weight from './Weight'
import Speed from './Speed';
import Area from './Area';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/time" element={<TimeCon />} />
          <Route path="/" element={<HomePage />} />
          <Route path="data" element={<DataCon />} />
          <Route path="temperature" element={<TemperatureCon/>}/>
          <Route path ="power" element= {<Power/>}/>
          <Route path ="weight" element= {<Weight/>}/>
          <Route path = "speed" element = {<Speed/>}/>
          <Route path = "area" element = {<Area/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
