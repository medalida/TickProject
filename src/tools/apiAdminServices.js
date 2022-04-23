import axios from 'axios';
import {Endpoint, getReqHeader} from './api';


let addTeacher = async(body)=>{
    try{
        let reqHeader = getReqHeader();
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

export {addTeacher};