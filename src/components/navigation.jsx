import React, { useState } from "react";
import Calendar from "react-calendar";
import { Link, useNavigate } from "react-router-dom";
import SessionList from "./sessionList";


let Navigation = (props) => {
    let navigate = useNavigate();
  const [day, setDay] = useState(new Date());

  return (
    <div className="d-flex flex-row w-100 pt-5 h-auto">
      <div className="d-flex flex-column justify-content-center align-items-center h-auto w-50">
        <Calendar
          onChange={(value, event) => {
            setDay(value);
            console.log(day);
          }}
        />
        <button className="btn btn-lg btn-primary start-call-btn m-4"
        onClick={()=>{
            navigate("/add-session", { replace: true });
        }}>
          Add session
        </button>
      </div>
      <div className="w-50">
        <SessionList for={day} />
      </div>
    </div>
  );
};

export default Navigation;
