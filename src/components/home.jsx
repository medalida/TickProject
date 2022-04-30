import React, { useState, useEffect } from "react";
import { TeacherContext } from "../App";
import Card from './card';
let Home = () => {
  //const value = React.useContext(TeacherContext);
  const [value, setValue] = useState({});
  useEffect(() => {
    setValue({ id: 10 });
  });
  return (
    <div  className="list d-flex flex-column justify-content-center align-items-center w-100">
      <div className="list d-flex flex-column  align-items-center w-75 p-4">
      <h1>Live</h1>
      <Card />
      </div>
      <div className="list d-flex flex-column  align-items-center w-75 p-4">
        <h1>Today</h1>
        <div
          className="list d-flex flex-column  align-items-center w-100 p-2 rounded"
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
