import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import logo from "../image/public/logo.png";
import admin from "../image/public/admin.jpg";
import teacher from "../image/public/teacher.jpg";
import "../css/connect.css";

class Connect extends PureComponent {
  state = {};
  render() {
    return (
      <div
        id="main"
        className="d-flex flex-column justify-content-start align-items-center w-100 p-2 pt-5">
        <div className="d-flex flex-row justify-content-center align-items-center w-100">
          <img src={logo} width="50" className="m-2" />
          <h1>Tick</h1>
        </div>
        <div>
          <h2 className="mt-5 pt-5">Connect as</h2>
        </div>

        <div className="d-flex flex-row h-100 w-100" id="container">
          <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 p-3">
            <Link to="/admin/login">
              <div id="admin" className="img"></div>
            </Link>
            <h3 className="text-center w-100">Admin</h3>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 p-3">
            <Link to="/login">
              <div id="teacher" className="img"></div>
            </Link>
            <h3 className="text-center w-100">Teacher</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Connect;
