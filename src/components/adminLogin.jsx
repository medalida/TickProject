import React, { useState, useEffect } from 'react';
import { Link , useNavigate} from "react-router-dom";
import {adminLogin} from "../tools/apiAuthServices.js";
import {getAdmin} from '../tools/auth';
import axios from 'axios';
import "../css/login.css";

let AdminLogin = (props)=> {
  
  let [data, setData] = useState({
    email:'',
    password:'',
    });

    let [error, setError] = useState('');
    let [resolve, setResolve] = useState('');
    let navigate = useNavigate();

    let getInputValue = (event)=>{
      let newdata = {...data};
      newdata[event.target.name] = event.target.value;
      setData(newdata);
    }

    useEffect(()=>{
      let token = localStorage.getItem('admin-token');
      let user = getAdmin(token);
      if(user && user.role ==='admin')
        navigate("/admin", { replace: true });
    });

  let onSubmit = async(e) => {
    e.preventDefault();
    let response = await adminLogin({...data});
    setError(response.error);
    setResolve(response.resolve);
    if(localStorage.getItem('admin-token')){
      navigate("/admin", { replace: true });
    }
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
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={getInputValue}
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
            onChange={getInputValue}
          />
        </div>

        <button type="submit" className="btn btn-primary m-5">
          Sign in
        </button>

        <p>Your etablissement is not registred ?</p>
        <Link to="/admin/register">Sign up</Link>
      </form>
      
      </div>
    );
  
}

export default AdminLogin;
