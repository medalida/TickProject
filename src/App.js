import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar";
import { getTeacher } from "./tools/auth";
import TeacherFrom from "./components/teacherForm";
import SessionForm from "./components/sessionForm";
import Navigation from "./components/navigation";
import Call from "./components/call";
import Profil from "./components/profil";
import Session from "./components/session";
import Home from "./components/home";
import Groups from "./components/groups";
import Students from "./components/students";
import Student from "./components/student";
import "./css/App.css";
import "./css/calendar.css";

export const TeacherContext = React.createContext();

let App = (props) => {
  const [teacher, setTeacher] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    let user = getTeacher(token);
    setTeacher({ ...teacher, ...user });
    if (!user) navigate("/login", { replace: true });
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/navigation" exact element={<Navigation />} />
        <Route path="/session/:id" exact element={<Session />} />
        <Route path="/session/:id/call-students" exact element={<Call />} />
        <Route
          path="/add-session"
          exact
          element={<SessionForm isAdmin={false} user={teacher} />}
        />
        <Route path="/profil" exact element={<Profil />} />
        <Route path="/profil/edit" exact element={<TeacherFrom />} />
        <Route path="/groups" exact element={<Groups />} />
        <Route path="/groups/:id" exact element={<Students />} />
        <Route path="/students/:id" exact element={<Student />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
