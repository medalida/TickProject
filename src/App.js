
import React , {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from "react-router-dom";
import Navbar from './components/navbar';
import {getTeacher} from './tools/auth';
import TeacherFrom from './components/teacherForm'
import AdminLoginForm from './components/adminLogin';
import SessionForm from './components/sessionForm';
import Navigation from './components/navigation';
import Call from './components/call';
import Session from './components/session';
import Home from './components/home';
import './css/App.css';

export const TeacherContext = React.createContext();

function App() {
  
  let [teacher, setTeacher] = useState(null);
  let navigate = useNavigate();

  useEffect(()=>{
    if(!teacher){
      let token = localStorage.getItem('token');
      let user = getTeacher(token);
      setTeacher({...user});
      if(!user)
      navigate("/login", { replace: true });
    }
  });
  
  return (
    <TeacherContext.Provider value="{teacher}">
    <Navbar/>
      <Routes>
      <Route path="/home" exact element={<Home/>}/>
      <Route path="/navigation" exact element={<Navigation/>}/>
      <Route path="/session/:id" exact element={<Session/>}/>
      <Route path="/session/:id/call-students" exact element={<Call/>}/>
      <Route path="/add-session" exact element={<SessionForm/>}/>
      <Route path="/profil" exact element={<TeacherFrom/>}/>
      <Route path="/profil/edit" exact element={<TeacherFrom/>}/>
      </Routes>
    
      </TeacherContext.Provider>
  );
}

export default App;
