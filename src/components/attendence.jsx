import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

let Attendence = (props) => {
  let navigate = useNavigate();

  let [Attendence, setAttendence] = useState(Array.from({length: 10}, () => null));

  let isPresent = (i, is) => {
    let NewAttendence = [...Attendence];
    NewAttendence[i]= is;
    setAttendence(NewAttendence);
  };


  let list = props.list;
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Student name</th>
          <th scope="col" className="text-center">
            Attendence
          </th>
        </tr>
      </thead>
      <tbody>
        {Attendence.map((x, i) => (
          <tr key={i}>
            <th scope="row">{i + 1}</th>
            <td
              style={{cursor: 'pointer'}}
              onClick={() => {
                navigate("/students/"+(i+1), { replace: true });
              }}
            >
              Mohammed DABOUZ
            </td>
            <td className="d-flex flex-row justify-content-center">
              <button
                id="present-btn"
                className={
                  x ? "btn btn-success mx-2" : "btn btn-outline-success mx-2"
                }
                onClick={() =>{isPresent(i, true)}}
              >
                Present
              </button>
              <button
                id="absent-btn"
                className={
                  x === false
                    ? "btn btn-danger mx-2"
                    : "btn btn-outline-danger mx-2"
                }
                onClick={() =>{isPresent(i, false)}}
              >
                Absent
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Attendence;
