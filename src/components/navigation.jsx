import React, { useState } from 'react';
import Calendar from 'react-calendar';
import SessionList from './sessionList';
import '../css/calendar.css';

let Navigation =(props)=>{
    const [day, setDay] = useState(new Date());

        return (
            <div className="d-flex flex-row w-100 pt-5 h-auto">
                <div className="d-flex flex-row justify-content-center align-items-center h-auto w-50">
                <Calendar
                onChange={(value,event)=>{
                    setDay(value);
                    console.log(day);
                }}/>
                </div>
                <div className="w-50">
                <SessionList for={day}/>
                </div>
            </div>
        );
}
 
export default Navigation;