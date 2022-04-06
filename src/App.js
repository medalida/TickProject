import logo from './logo.svg';
import React from 'react';
import {
   Routes, Route, Link
} from "react-router-dom";
import Navbar from './components/navbar';
import AdminLoginForm from './components/adminLogin';

import './App.css';

function App() {
  return (
    <React.Fragment>
    <Navbar/>
      <Routes>
      <Route path="/" element={<AdminLoginForm/>}/> 
      </Routes>
    
    </React.Fragment>
  );
}

export default App;
