import React, { useState, useEffect } from "react";

let Home = () => {
  //const value = React.useContext(TeacherContext);
  const [value, setValue] = useState({});
  useEffect(() => {
    setValue({ id: 10 });
  });
  return (
    <div  className="list d-flex flex-column justify-content-center align-items-center w-100 p-5">
      Admin home section TODO
    </div>
  );
};

export default Home;
