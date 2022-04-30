import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addGroup } from "../tools/apiAdminServices";

let GroupForm = (props) => {
  let [error, setError] = useState("");
  let [resolve, setResolve] = useState("");
  let navigate = useNavigate();

  let onSubmit = async (event) => {
    event.preventDefault();
    let body = {name : document.getElementById("name").value};
    let response = await addGroup(body);
    setError(response.error);
    setResolve(response.resolve);
    if (response.resolve) {
    navigate("/groups", { replace: true });
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="d-flex flex-column justify-content-center align-items-center w-100 h-100 p-5"
    >
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
      <h1>Add new group</h1>
      <div className="form-group p-4">
        <label className="p-2" htmlFor="name">
          Group name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Enter the group name"
          required
        />
        <small id="emailHelp" className="form-text text-muted">
          The group name must be unique.
        </small>
      </div>

      <button type="submit" className="btn btn-primary m-4">
        Add
      </button>
    </form>
  );
};

export default GroupForm;
