import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import add from "../image/public/plus.png";
import img from "../image/public/profil.jpg";
import "../css/student.css";

let Student = (props) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-2 w-100">
      <div
        id="call-background"
        className="d-flex flex-column justify-content-center align-items-center p-4 w-75"
      >
        <img className="m-3" id="student-img" src={img} alt="" />
        <h1 className="m-3">Student Name</h1>
        <div className="d-flex flex-column justify-content-start w-75 p-2">
          <form className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
            <div className="form-group w-75 py-2">
              <label htmlFor="firstName">Email adress</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                aria-describedby="nameHelp"
                placeholder="Enter first name"
                value="firstname.lastname@institution.org"
                disabled={true}
              />
            </div>
            <div className="form-group py-1">
              <label className="control-label" htmlFor="birthdate">
                Birthdate
              </label>
              <input
                className="form-control"
                id="date"
                name="birthdate"
                placeholder="MM/DD/YYY"
                option={{ format: "yyyy/MM/dd" }}
                type="date"
                value="2001-03-31"
                disabled={true}
              />
            </div>
            <div className="form-group w-75 py-1">
              <label htmlFor="firstName">Class</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                aria-describedby="nameHelp"
                placeholder="Enter first name"
                value="L2 computer science"
                disabled={true}
              />
            </div>
            <button className="btn btn-warning m-4">Show attendence</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Student;
