
import React from 'react';
import {
   Routes, Route, Link
} from "react-router-dom";
import AdminNavBar from './components/adminNavBar';
import TeacherFrom from './components/teacherForm';
import StudentForm from './components/studentForm';
import GroupForm from './components/groupForm';

export const AdminContext = React.createContext();
//import './admin.css';

function Admin() {
  return (
    <React.Fragment>
    <AdminNavBar/>
      <Routes>
      <Route path="/add-techer" element={<TeacherFrom/>}/>
      <Route path="/add-student" element={<StudentForm/>}/>
      <Route path="/add-group" element={<GroupForm/>}/> 
      </Routes>
    
    </React.Fragment>
  );
}

export default Admin;