import React, { useState, useEffect } from 'react';
import { Link , useNavigate} from "react-router-dom";
import {teacherLogin} from '../tools/apiAuthServices';
import {getTeacher} from '../tools/auth';
import "../css/login.css";

let LoginForm = (props) => {
  let [data, setData] = useState({
    email: "",
    password: "",
  });

  let [error, setError] = useState("");
  let [resolve, setResolve] = useState("");
  let navigate = useNavigate();

  let getInputValue = (event) => {
    let newdata = { ...data };
    newdata[event.target.name] = event.target.value;
    setData(newdata);
    console.log(newdata);
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    let user = getTeacher(token);
    if (user && user.role === "teacher") navigate("/home", { replace: true });
  });

  let onSubmit = async (e) => {
    e.preventDefault();
    let response = await teacherLogin({ ...data });
    setError(response.error);
    setResolve(response.resolve);
    if (response.resolve) {
      navigate("/home", { replace: true });
    }
  };

  return (
    <div
      id="login"
      className="w-100 h-100 d-flex flex-column justify-content-center p-4"
    >
      <form
        onSubmit={onSubmit}
        className="d-flex flex-column justify-content-center align-items-center bg-white w-50 h-75"
        id="login_form"
      >
        <h1>Login</h1>
        <p id='register_error' className={error?"bg-danger text-white p-1" :""}>{error}</p>
          <p id='register_error' className={resolve?"bg-danger text-white p-1" :""}>{resolve}</p>
        <div className="form-group w-75">
          <label htmlFor="email">Email address</label>
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
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary m-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
