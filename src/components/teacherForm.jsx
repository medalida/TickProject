import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TeacherContext } from "../App";
import { addTeacher } from "../tools/apiAdminServices";

let TeacherFrom = (props) => {
  let [data, setData] = useState({
    firstName: "",
    lastName: "",
    birthdate: "",
    email: "",
  });

  let [error, setError] = useState("");
  let [resolve, setResolve] = useState("");
  let navigate = useNavigate();

  let getInputValue = (event) => {
    let newdata = { ...data };
    newdata[event.target.name] = event.target.value;
    console.log(newdata);
    setData(newdata);
  };

  let onSubmit = async (event) => {
    event.preventDefault();
    let response = await addTeacher({ ...data });
    setError(response.error);
    setResolve(response.resolve);
    if (response.resolve) {
      navigate("/home", { replace: true });
    }
  };

  const value = React.useContext(TeacherContext) | props.teacher;
  return (
    <div
      className="w-100 h-100 d-flex flex-column justify-content-center align-items-center p-4"
      onSubmit={onSubmit}
    >
      <form className="d-flex flex-column justify-content-center align-items-center w-50 h-100">
        <p
          id="register_error"
          className={error ? "bg-danger text-white p-1 " : ""}
        >
          {error}
        </p>
        <p
          id="register_error"
          className={resolve ? "bg-danger text-white p-1 " : ""}
        >
          {resolve}
        </p>
        <div className="form-group w-75 py-2">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            aria-describedby="nameHelp"
            placeholder="Enter first name"
            required
            onChange={getInputValue}
          />
        </div>

        <div className="form-group w-75 py-2">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            aria-describedby="nameHelp"
            placeholder="Enter last name"
            required
            onChange={getInputValue}
          />
        </div>
        <div className="form-group py-2">
          <label className="control-label" htmlFor="birthdate">
            Date
          </label>
          <input
            className="form-control"
            id="date"
            name="birthdate"
            placeholder="MM/DD/YYY"
            option={{ format: "yyyy/MM/dd" }}
            type="date"
            onChange={getInputValue}
            required
          />
        </div>
        <div className="form-group w-75 py-2">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
            onChange={getInputValue}
          />
        </div>
        <div className="mb-3 w-75 py-2">
          <label htmlFor="formFile" className="form-label">
            Profil image
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        <button type="submit" className="btn btn-primary m-4">
          Add Teacher
        </button>
      </form>
    </div>
  );
};

export default TeacherFrom;
