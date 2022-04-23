import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getAdmin } from "./tools/auth";
import AdminNavBar from "./components/adminNavBar";
import TeacherFrom from "./components/teacherForm";
import StudentForm from "./components/studentForm";
import GroupForm from "./components/groupForm";

export const AdminContext = React.createContext();
//import './admin.css';

function Admin() {
  let [admin, setAdmin] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    if (!admin) {
      let token = localStorage.getItem("admin-token");
      let user = getAdmin(token);
      setAdmin({ ...user });
      if (!user) {
        navigate("/admin/login", { replace: true });
      }
    }
  });

  return (
    <React.Fragment>
      <AdminNavBar />
      <Routes>
        <Route path="/add-techer" exact element={<TeacherFrom />} />
        <Route path="/add-student" exact element={<StudentForm />} />
        <Route path="/add-group" exact element={<GroupForm />} />
      </Routes>
    </React.Fragment>
  );
}

export default Admin;
