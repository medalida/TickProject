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
            <div>
                <div className="d-flex flex-column justify-content-center align-items-center" onClick={()=>{console.log(forDay)}}><h2>{forDay.toDateString()}</h2></div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                <Card/>
                <Card/>
                <Card/>
                    
                </div>
            </div>
        );
    
}
 
export default SessionList;