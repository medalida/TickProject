import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getAdmin } from "./tools/auth";
import AdminNavBar from "./components/adminNavBar";
import TeacherFrom from "./components/teacherForm";
import StudentForm from "./components/studentForm";
import SessionForm from "./components/sessionForm";
import GroupForm from "./components/groupForm";
import Groups from './components/groups';
import Students from './components/students';
import Student from './components/student';
import Institution from "./components/institution";

export const AdminContext = React.createContext();
//import './admin.css';

function Admin() {
  let [admin, setAdmin] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
      let token = localStorage.getItem("admin-token");
      let user = getAdmin(token);
      setAdmin({...admin, ...user});
      if (!user) {
        navigate("/admin/login", { replace: true });
      }
  },[]);

  return (
    <React.Fragment>
      <AdminNavBar />
      <Routes>
        <Route path="/add-techer" exact element={<TeacherFrom />} />
        <Route path="/add-student" exact element={<StudentForm />} />
        <Route path="/groups" exact element={<Groups isAdmin={true}/>} />
        <Route
          path="/add-session"
          exact
          element={<SessionForm isAdmin={true} user={admin} />}
        />
        <Route path="/add-group" exact element={<GroupForm />} />
        <Route path="/intitut" exact element={<Institution />} />
        <Route path="/groups/:id" exact element={<Students />} />
        <Route path="/students/:id" exact element={<Student />} />
      </Routes>
    </React.Fragment>
  );
}

export default Admin;
