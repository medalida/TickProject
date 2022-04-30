import React, { useState, useEffect } from 'react';
import Card from './card';
import Call from './call';

let SessionList =(props)=>{

    const [forDay, SetFor] = useState(props.for);
    
    
    useEffect(()=>{
        if(forDay.toString() != props.for.toString())
            SetFor(props.for);
    });

        return (
            <div className="d-flex flex-column justify-content-center align-items-center w-100 p-2">
                <div className="d-flex flex-column justify-content-center align-items-center"><h2>{forDay.toDateString()}</h2></div>
                <div className="w-50 border border-secondary mb-5"></div>
                <div className="list d-flex flex-column  align-items-center overflow-auto w-100 p-2 bg-light rounded"
                style={{maxHeight:"60vh"}}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                </div>
            </div>
        );
    
}
 
export default SessionList;