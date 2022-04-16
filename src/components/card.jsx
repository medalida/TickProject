import React, { useState } from 'react';
import "../css/carte.css";



let Card = (props)=>{
    let session = props.session;
    let state = {
        sessionId : 1,
        startTime :  '10:12',
        endTime : '10:11',
        sessionName : 'Progrmation',
        group : 'L2 A1',
      }


        return (
            <div id="carte" className="d-flex flex-row align-items-center w-75 rounded m-1">
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