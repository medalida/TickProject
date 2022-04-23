import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import "../css/carte.css";



let Card = (props)=>{
    let session = props.session;
    let state = {
        sessionId : 1,
        startTime :  '10:12',
        endTime : '10:11',
        sessionName : 'Progrmmation',
        group : 'L2 A1',
      }
      let navigate = useNavigate();

      let onClick =()=>{
        navigate("/session/"+state.sessionId, { replace: true });
      }


        return (
            <div id="carte" className="d-flex flex-row align-items-center w-75 rounded m-1" onClick={onClick}>
                <div id="time" className="d-flex flex-column justify-content-around h-75 px-5">
                    <span className=""> {state.startTime}</span>
                    <span className=""> {state.endTime}</span>
                </div>
                <div className="d-flex flex-column justify-content-around h-75 w-auto p-1 mr-auto" style={{width : "auto", marginRight:"auto"}}>
                    <h4>{state.sessionName}</h4>
                    <h6>{state.group}</h6>
                </div>
                
                    <div id="status" className="mx-4" > </div>
               
            </div>
        );
    
}
 
export default Card;