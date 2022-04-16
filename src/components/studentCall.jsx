import React, { useState } from "react";
import "../css/profil.css";
import img from "../image/public/teacher.jpg";

let StudentCall = (props)=>{
  
  const [present, setPresent] = useState(null);
let state = {
    id: null,
    present: null,
    attendence:{
        predent:null,
        absent:null,
        unchecked:null
    }
  };

  let isPresent = (e) => {
    let nextButton = document.querySelector(".swiper-button-next");
    setPresent(true);
    //props.mark(props.studentId, present);
    console.log("this" + present);
    //e.target.className = "btn btn-success mx-2";
    
    nextButton.click();
  };

  let isAbsent = (e) => {
    setPresent(false);
    let nextButton = document.querySelector(".swiper-button-next");
    nextButton.click();
  };

    return (
      <div
        id="call-background"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <img className="m-3" id="student-img" src={img} alt="" />
        <h1 className="m-3">Student Name</h1>
        <ul className="list-group list-group-flush w-75">
        <li className="list-group-item bg-transparent d-flex justify-content-between align-items-center">Present <span className="badge bg-success badge-primary badge-pill">20</span></li>
          <li className="list-group-item bg-transparent d-flex justify-content-between align-items-center">Absent <span className="badge bg-danger badge-primary badge-pill">20</span></li>
          <li className="list-group-item bg-transparent d-flex justify-content-between align-items-center">Unchecked <span className="badge bg-secondary badge-primary badge-pill">20</span></li>
        </ul>
        <p className="mt-4">Last session : <span className="badge bg-danger badge-danger badge-pill">Absent</span></p>
        <div className="mt-4">
          <button
            id="present-btn"
            className={present? "btn btn-success mx-2": "btn btn-outline-success mx-2"}
            onClick={isPresent}
          >
            Present
          </button>
          <button
            id="absent-btn"
            className={present === false? "btn btn-danger mx-2": "btn btn-outline-danger mx-2"}
            onClick={isAbsent}
          >
            Absent
          </button>
        </div>
      </div>
    );

}

export default StudentCall;
