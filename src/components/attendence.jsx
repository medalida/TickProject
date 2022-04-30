import React from "react";
import {useNavigate} from 'react-router-dom';

let Attendence = (props) => {
  let navigate = useNavigate();
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
        {[...Array(20)].map((x, i) => (
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
