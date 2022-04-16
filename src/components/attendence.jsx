import React from 'react';

let Attendence = (proprs)=>{

    return(

        <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Student name</th>
      <th scope="col">Attendence</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mohammed DABOUZ</td>
      <td>
      <button
            id="present-btn"
            className="btn btn-outline-success mx-2"
          >
            Present
          </button>
          <button
            id="absent-btn"
            className="btn btn-outline-danger mx-2" 
          >
            Absent
          </button>
      </td>

    </tr>
    </tbody>
        </table>
    );
}
export default Attendence;