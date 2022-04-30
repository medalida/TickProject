import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import add from '../image/public/plus.png'
import img from "../image/public/profil.jpg";
import '../css/student.css'

let Student = (props)=>{
    
    return(
        <div className="d-flex flex-column justify-content-center align-items-center p-2 w-100">
        <div
        id="call-background"
        className="d-flex flex-column justify-content-center align-items-center p-5 w-75"
      >
        <img className="m-3" id="student-img" src={img} alt="" />
        <h1 className="m-3">Student Name</h1>
        <h3 className="mb-3">firstname.lastname@institution.org</h3>
        <div className="d-flex flex-column justify-content-start p-4">
        <h3>Birthdate: 12/03/2001</h3>
        <h3>Class: Computer science</h3>
        <h3>Group: L2 INFO Gr2</h3>
        </div>

      </div>
      </div>
    );
}

export default Student;