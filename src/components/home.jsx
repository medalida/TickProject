import React, { useState, useEffect } from 'react';
import {TeacherContext} from '../App';
let Home = ()=>{
    //const value = React.useContext(TeacherContext);
    const [value, setValue]= useState({});
    useEffect(()=>{
        setValue({id:10});
    });
    return(
        <div>
            this is :
        </div>
    );
}

export default Home;