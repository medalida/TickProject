import React, { useState, useEffect } from "react";
import { TimePicker } from "antd";
import "antd/dist/antd.css";
import { getGroups } from "../tools/apiServices";
import {getTeachers} from '../tools/apiAdminServices';
import moment from "moment";
import group from "antd/lib/avatar/group";

let SessionForm = (props) => {
  let [state, setState] = useState({});
  let [groups, setGroups] = useState([]);
  let [teachers, setTeachers] = useState([]);

  let load = async () => {
    let Groups = await getGroups(props.isAdmin);
    setGroups([...Groups.data]);
    let Teachers = await getTeachers();
    setTeachers([...Teachers.data]);
  };
  useEffect(() => {
    load();
  }, []);
  let onChange = (key, value) => {
    let newState = { ...state};
    newState[key] = value;
    setState(newState);
    console.log(state);
  };

  const format = "HH:mm";

  let onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="d-flex flex-column justify-content-center align-items-center w-100 h-100 pt-5"
    >
      <div className="form-group py-3 w-25">
        <label htmlFor="name">Session Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          aria-describedby="nameHelp"
          placeholder="Enter session name"
        />
      </div>

      <div className="form-group py-3 w-25">
        <label htmlFor="techer">Teacher Name</label>
        {props.isAdmin ? (
          <select id="techer" className="form-control w-100"  required>
            <option></option>
            {teachers.map((x,i)=><option key={x.id}>{x.firstName + " "+x.lastName}</option>)}
          </select>
        ) : (
          <select id="techer" className="form-control w-100" value={props.user.id} disabled={true} required>
            <option>{props.user.firstName + " "+props.user.lastName}</option>
          </select>
        )}

      </div>

      <div className="form-group py-3 w-25">
        <label htmlFor="class">Students Group</label>
        <select className="form-control" id="class"  required>
          <option key={-1}></option>
          {groups.map((x,i)=><option key={x.id}>{x.name}</option>)}
        </select>
      </div>

      <div className="form-group py-3 w-25">
        <label className="p-2" htmlFor="date">
          Date
        </label>
        <input
        className="form-control"
          type="date"
          id="date"
          name="date"
          onChange={(e) => {
            onChange("date", e.target.value);
          }}
        />
      </div>

      <div className="form-group py-3">
        <label className="p-2" htmlFor="start_time">
          Start Time
        </label>
        <TimePicker
          format={format}
          allowClear={false}
          onChange={(t) => {
            onChange("start_time", t.format(format));
            console.log(t.format(format));
          }}
        />
      </div>

      <div className="form-group py-3">
        <label className="p-2" htmlFor="end_time">
          End time
        </label>
        <TimePicker
          format={format}
          allowClear={false}
          onChange={(t) => {
            onChange("end_time", t.format(format));
            console.log(t.format(format));
          }}
        />
      </div>

      <button type="submit" className="btn btn-primary m-4">
        Add session
      </button>
    </form>
  );
};

export default SessionForm;
