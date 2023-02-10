import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import StudentLocation from './components/Location/StudentLocation';
import Home from './components/HomeD/Home';
import Buses from './components/Buses/Buses';
import College from './components/CollegeDetails/College';
// import login from "."
import Driver from './components/Driver';
import Signup from './components/Singup';
import BusDetails from './Bus/busDetails';
import Location from './components/Location/Location';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/driver-details' element={<Driver/>}/>
          <Route path='/college-details' element={<College/>}/>
          <Route path='/bus-details' element={<BusDetails/>}/>
          {/* <Route path='/bus-details' element={<BusDetails/>}/> */}
          <Route path='student-location' element={<StudentLocation/>}/>
          <Route path='/user-services' element={<Location/>}/>
        </Routes>
      </Router>
      {/* <Signup/> */}
    </div>
  );
}

export default App;
