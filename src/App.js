 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AppNavbar from './Components/AppNavbar';
import Store from './Components/Store';
import Home from './Components/Home';
// import Mac from './Components/Mac';
// import Ipad from './Components/Ipad';
// import Watch from './Components/Watch';
 

function App() {
  return (
    <Router>
      <AppNavbar />
      <div className="container-fluid">
        <Routes>
         <Route path="/store" element={<Store />} />  
         <Route path="/" element={<Home />} />  

          {/* <Route path="/mac" element={<Mac />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/watch" element={<Watch />} />
     
          {/* <Route path="/" element={<Store />} /> */} 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

