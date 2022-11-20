import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React from 'react';
import {
  BrowserRouter as Router, 
  Routes, 
  Route, 
   } 
  from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Navbar title = "Text Utils" aboutText = "About Us" homeText = "Home"/>
      <div className = "container">
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm headerText = "Enter the text to analyze"/>} />
      </Routes>
      </div>
      </Router>
    </>
  );
}
export default App;
