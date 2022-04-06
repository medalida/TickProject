import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import AdminLogin from './components/adminLogin';
import AdminRegister from './components/adminRegister';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  
        
        <Router>
      <Routes>
      <Route path="admin/login" exact element={<AdminLogin/>} />
      <Route path="admin/register" exact element={<AdminRegister/>} />
      <Route path="admin/*" exact element={<AdminLogin/>} />
      
      <Route path="/*" exact element={<App/>}/>
      </Routes>
    </Router>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
