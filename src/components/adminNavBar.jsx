import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import logo from "../image/public/logoAdmin.png";
import logoExample from "../image/public/logo-example.png";
import "../css/navbar.css";
import Clock from "./clock";

let AdminNavBar = (props) => {
  let navigate = useNavigate();

  let logout = () => {
    console.log("logout");
    localStorage.removeItem("admin-token");
    navigate("/admin/login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top w-100">
      <div className="container-fluid">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top m-2"
          alt=""
        />
        <a className="navbar-brand" href="">
          Tick
        </a>
        <div className="line"></div>
        <img
          src={logoExample}
          height="30"
          className="d-inline-block align-top m-3"
          alt=""
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/admin">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="add-techer">
                Teachers
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Students
              </a>
            </li>
          </ul>
          <div className="d-flex flex-row justify-content-end align-items-center w-100">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Institution"
                >
                  Institution
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-danger"
                  aria-current="page"
                  to="/admin/login"
                  onClick={logout}
                >
                  Logout
                </Link>
              </li>
            </ul>
            <div className="line mx-3"></div>
            <Clock />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavBar;
