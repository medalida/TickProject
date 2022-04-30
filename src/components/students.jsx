import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import add from "../image/public/plus.png";
import "../css/student.css";

let Students = (props) => {
  let navigate = useNavigate();
  let state = {
    id: null,
    present: null,
    attendence: {
      predent: null,
      absent: null,
      unchecked: null,
    },
  };

  return (
    <div className="p-5">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Student name</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(20)].map((x, i) => (
            <tr
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/students/" + (i + 1), { replace: true });
              }}
            >
              <th scope="row">{i + 1}</th>
              <td>Mohammed DABOUZ</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
