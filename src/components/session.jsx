import React, { useState } from "react";
import { Link } from "react-router-dom";
import Attendence from "./attendence";
import "../css/session.css";

let Session = (props) => {
  let session;
  return (
    <div className="d-flex flex-column justify-content-start h-100 pt-5">
      <div className="session-label d-flex flex-column justify-content-end w-100 p-3 text-white">
        <h1>sessionName</h1>
        <h3>Group</h3>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center w-100 p-5">
        <div className="time-frame w-25 text-center">
          <div className="date-frame w-100 fs-2 bg-light rounded m-2 text-center">
            Monday 15 april 2022
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center h-50 m-1">
            <div className="w-50 h-50 text-center fs-4 bg-light rounded mx-1">
              <strong>start</strong>
              <p>10:11</p>
            </div>
            <div className="w-50 h-50 text-center fs-4 bg-light rounded mx-1">
              <strong>End</strong>
              <p>11:11</p>
            </div>
          </div>
        </div>

        <Link to={"call-students"} state={{ first: "this" }}>
          <button className="btn btn-info btn-lg start-call-btn m-4">
            Start Call
          </button>
        </Link>
        <Attendence />
      </div>
    </div>
  );
};

export default Session;
