import React, { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import add from '../image/public/plus.png';
import {getGroups} from "../tools/apiServices";
import '../css/student.css'

let Groups = (props)=>{
    let navigate = useNavigate();
    let [groups, setGroups] = useState([]);

    let getData = async ()=>{
        let isAdmin = props.isAdmin | false;
        let response = await getGroups(isAdmin);
        setGroups(response.data);
    }
    
    useEffect(()=>{
        getData(); 
    },[]);

    return(
        <div className=" d-flex flex-row justify-content-center align-items-center w-100">
            <div className="d-flex flex-wrap  pt-4 w-75">
                {[...groups].map((x, i)=>(
                    <Group name={x.name} id={x.id} key={i}/>
                ))}

                {props.isAdmin ?
                <Link to="/admin/add-group">
                <div className="d-flex flex-row justify-content-center align-items-center m-2 p-2 group-card">
                    <img src={add} width="70px" alt="" />
                </div>
                </Link>: ''}
                
                
            </div>
        </div>
    );
    
}

export default Groups;

let Group = (props)=>{
    let navigate = useNavigate();

    let onclick=()=>{
        navigate('/groups/'+props.id, { replace: true });
    }
    return(
        
        <div className="m-2 p-2 group-card"
        onClick={onclick}>
           {props.name}
        </div>
    )
}
