import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "../css/login.css";

let AdminLogin = (props)=> {
  
  let [data, setData] = useState({
    adminEmail:'',
    password:'',
    });
    let [error, setError] = useState('');
    let [resolve, setResolve] = useState('');

  let onSubmit = (e) => {
    e.preventDefault();
    setError('errrrorr ereroe');
    console.log("submit");
  };


    return (
    <div id="admin_login" className="w-100 h-100 d-flex flex-column justify-content-center p-4">
      <form onSubmit={onSubmit} className=" d-flex flex-column justify-content-center align-items-center rounded w-50 bg-white h-75" id="login_form">
          <p id='register_error' className={error?"bg-danger text-white p-1 " :""}>{error}</p>
          <p id='register_error' className={resolve?"bg-danger text-white p-1 " :""}>{resolve}</p>
        <div className="form-group w-75">
          <label htmlFor="adminEmail">Admin email address</label>
          <input
            type="email"
            className="form-control"
            name="adminEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group w-75">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary m-5">
          Sign in
        </button>

        <p>Votre etablissement n'est pas inscrit</p>
        <Link to="/admin/register">Sign up</Link>
      </form>
      
      </div>
    );
  
}

export default AdminLogin;
