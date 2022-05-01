import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import "../css/carte.css";



let Card = (props)=>{
    let session = props.session;
    let info = {
        sessionId : 1,
        startTime :  '10:12',
        endTime : '10:11',
        sessionName : 'Progrmmation',
        group : 'L2 INFO A1',
      }

      let navigate = useNavigate();

      let onClick =()=>{
        navigate("/session/"+info.sessionId, { replace: true });
      }


        return (
            <div id="carte" className="d-flex flex-row align-items-center w-75 rounded m-1" onClick={onClick}>
                <div id="time" className="d-flex flex-column justify-content-around h-75 px-5">
                    <span className=""> {info.startTime}</span>
                    <span className=""> {info.endTime}</span>
                </div>
                <div className="d-flex flex-column justify-content-around h-75 w-auto p-1 mr-auto" style={{width : "auto", marginRight:"auto"}}>
                    <h4>{info.sessionName}</h4>
                    <h6>{info.group}</h6>
                </div>
                <div className="d-flex flex-row align-items-center">
                <div className="text-danger">status</div> <div id="status" className="mx-4" > </div>
                </div>
            </div>
        );
}
 
export default Card;