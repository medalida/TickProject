import React, { PureComponent } from "react";
import {TeacherContext} from '../App';


let TeacherFrom =(props)=> {
  

    const value = React.useContext(TeacherContext) | props.teacher;
    console.log(value);
    return (
      <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center p-4">
        <form
          
          className="d-flex flex-column justify-content-center align-items-center w-50 h-100"
        >
          <div className="form-group w-75 py-2">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              aria-describedby="nameHelp"
              placeholder="Enter first name"
            />
          </div>

          <div className="form-group w-75 py-2">
            <label htmlFor="last_name">First Name</label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              aria-describedby="nameHelp"
              placeholder="Enter last name"
            />
          </div>

          <div className="form-group w-75 py-2">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3 w-75 py-2">
            <label htmlFor="formFile" className="form-label">
              Profil image
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <button type="submit" className="btn btn-primary m-4">
            Save changes
          </button>
        </form>
      </div>
    );
  
}

export default TeacherFrom;
