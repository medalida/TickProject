import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import './css/index.css';
import App from './App';
import Admin from './Admin.js';
import Connect from './components/connect';
import reportWebVitals from './reportWebVitals.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import AdminLogin from './components/adminLogin';
import AdminRegister from './components/adminRegister';
import LoginForm from './components/loginForm';
import Carte from './components/card';
import Call from './components/call';
import 'react-calendar/dist/Calendar.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  
        
      <Router>
      <Routes>
      <Route path="/c/:id" exact element={<Call/>}/>
      <Route path="/" exact element={<Connect/>}/>
      <Route path="admin/login" exact element={<AdminLogin/>} />
      <Route path="admin/register" exact element={<AdminRegister/>} />
      <Route path="login" exact element={<LoginForm/>} />
      <Route path="admin/*" exact element={<Admin/>} />
      <Route path="/*" exact element={<App/>}/>
      </Routes>
    </Router>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
