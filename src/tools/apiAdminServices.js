import axios from 'axios';
import {Endpoint, getReqHeader} from './api';


let addTeacher = async(body)=>{
    try{
        let reqHeader = getReqHeader(true);
        let data = await axios.post(Endpoint+'api/teacher/add', body, {...reqHeader});
        console.log(data.data);
        return {error : '', resolve : 'A new teacher added successfully'};
    }catch(e){
        if(e.response && e.response.status === 400){
        return {error : e.response.data, resolve : ''};
        }
        return {error : "error", resolve : ''};
    }
}

let addGroup = async(body, is)=>{
    try{
        let reqHeader = getReqHeader(true);
        let data = await axios.post(Endpoint+'api/group/', body, {...reqHeader});
        console.log(data.data);
        return {error : '', resolve : 'A new group added successfully'};
    }catch(e){
        if(e.response && e.response.status === 400){
        return {error : e.response.data, resolve : ''};
        }
        return {error : "error", resolve : ''};
    }
}

let getTeachers = async()=>{
    try{
        let reqHeader = getReqHeader(true);
        let data = await axios.get(Endpoint+'api/teacher/all', {...reqHeader});
        return {error : '', data : data.data};
    }catch(e){
        if(e.response && e.response.status === 400){
        return {error : e.response.data, data : []};
        }
        console.log(e);
        return {error : "error", data : []};
    }
}

export {addTeacher, addGroup, getTeachers};