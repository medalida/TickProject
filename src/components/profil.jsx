import React, { useState, useEffect } from "react";
import img from "../image/public/teacher_img.jpg";

let Profil = (props) => {
  let [error, setError] = useState("");
  let [resolve, setResolve] = useState("");
  let [edit, setEdit] = useState(false);

  let onSubmit = async (event) => {
      event.preventDefault();
      setEdit(!edit);
  };

  let getInputValue = (event) => {};

  return (
    <div
      className="w-100 h-100 d-flex flex-column justify-content-center align-items-center p-4"
      onSubmit={onSubmit}
    >
      <img className="m-3" id="student-img" src={img} alt="" />
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
            value="Firstname"
            onChange={getInputValue}
            disabled={true}
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
            value="LASTNAME"
            onChange={getInputValue}
            disabled={true}
          />
        </div>
        <div className="form-group py-2">
          <label className="control-label" htmlFor="birthdate">
          Birthdate
          </label>
          <input
            className="form-control"
            id="date"
            name="birthdate"
            placeholder="MM/DD/YYY"
            option={{ format: "yyyy/MM/dd" }}
            type="date"
            value="1991-03-31"
            onChange={getInputValue}
            disabled={true}
          />
        </div>
        <div className="form-group w-75 p-2">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value="firstname.lastname@institution.org"
            onChange={getInputValue}
            disabled={true}
          />
        </div>

        {edit ? (
          <React.Fragment>
            <div className="form-group w-75 p-2">
              <label htmlFor="oldpassword">Password</label>
              <input
                type="password"
                className="form-control"
                name="oldpassword"
                placeholder="Old password"
                onChange={getInputValue}
                required
              />
            </div>

            <div className="form-group w-75 p-2">
              <label htmlFor="newpassword">Password</label>
              <input
                type="password"
                className="form-control"
                name="newpassword"
                placeholder="New password"
                onChange={getInputValue}
                required
              />
            </div>

            <div className="form-group w-75 p-2">
              <label htmlFor="confirmpassword">Password</label>
              <input
                type="password"
                className="form-control"
                name="confirmpassword"
                placeholder="Confirm password"
                onChange={getInputValue}
                required
              />
            </div>
            </React.Fragment>
        ) : (
          <div></div>
        )}

        <button type="submit" className="btn btn-primary m-4">
          {edit? "Save new password" : "Change Password"}
        </button>
      </form>
    </div>
  );
};

export default Profil;
