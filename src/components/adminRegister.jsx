import React, { useState, useEffect } from 'react';
import { Link , useNavigate} from "react-router-dom";
import {getAdmin} from '../tools/auth';
import {register} from "../tools/apiAuthServices.js";

let AdminRegister = (props) => {

  let [data, setData] = useState({
    name :'',
    logo:'',
    adminEmail:'',
    password:'',
    confirmPassword:''
    });
    let [error, setError] = useState('');
    let [resolve, setResolve] = useState('');
    let navigate = useNavigate();
  
    useEffect(()=>{
      let token = localStorage.getItem('admin-token');
      let user = getAdmin(token);
      if(user && user.role ==='admin')
        navigate("/admin", { replace: true });
    });

  let getInputValue = (event)=>{
    let newdata = {...data};
    newdata[event.target.name] = event.target.value;
    setData(newdata);
  }

  let onSubmit = async (event)=>{
    event.preventDefault();
    if(data.password.length == 0){
      setError('Password required');
      return;}
    else if(data.password.length < 8){
      setError('Short password');
      return;}
    else if(data.password != data.confirmPassword){
      setError('Password not comfirmed');
      return;}
    else
    setError('');

    let response = await register({...data});
    setError(response.error);
    setResolve(response.resolve);
    if(localStorage.getItem('token')){
      navigate("/admin", { replace: true });
    }
  }

    return (
        <div id="register" className="w-100 h-100 d-flex flex-column justify-content-center p-4">
      <form
        onSubmit={onSubmit}
        className="d-flex flex-column justify-content-center align-items-center w-50 h-100 bg-white rounded needs-validation"
      >
          <h1 className="pb-4">Register your Institution</h1>
          <p id='register_error' className={error?"bg-danger text-white p-1" :""}>{error}</p>
          <p id='register_error' className={resolve?"bg-danger text-white p-1" :""}>{resolve}</p>
        <div className="form-group w-75">
          <label htmlFor="name">Institution name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name='name'
            aria-describedby="nameHelp"
            placeholder="Enter full name"
            onChange={getInputValue}
            required
          />
        </div>
        <div className="form-group w-75">
          <label htmlFor="adminEmail">Admin email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="adminEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={getInputValue}
            required
          />

        </div>
        <div className="form-group w-75 d-flex flex-row align-items-center">
        <div className="form-group w-75">
          <label htmlFor="logo">Institution logo</label>
          <input
            name="logo"
            type="url"
            className="form-control"
            id="logo_input"
            placeholder="https://"
            onChange={getInputValue}
            required
          />
          </div>
          <img src={data.logo} alt="" className="m-3" height="50px" style={{maxWidth:"200px"}}/>
        </div>
        <div className="d-flex flex-column align-items-center">
            <div id="logo_show"></div>
        </div>
        <div className="form-group w-75">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={getInputValue}
            required
          />

          <div></div>
        </div>
        <div className="form-group w-75">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            className="form-control"
            id="confirm_password"
            placeholder="Password"
            onChange={getInputValue}
            required
          />
        </div>
        <button type='submit' className="btn btn-primary mb-4 mt-2">
          Sign up
        </button>

        <p>You already have acount for your etablishement</p>
        <Link to="/admin/login">Sign in</Link>
      </form>
      </div>
    );
  
}

export default AdminRegister;
