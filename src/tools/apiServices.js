import axios from 'axios';
import {Endpoint, getReqHeader} from './api';


let getGroups = async(isAdmin = false)=>{
    try{
        let reqHeader = getReqHeader(isAdmin);
        let data = await axios.get(Endpoint+'api/group/all', {...reqHeader});
        return {error : '', data : data.data};
    }catch(e){
        if(e.response && e.response.status === 400){
        return {error : e.response.data, data : []};
        }
        console.log(e);
        return {error : "error", data : []};
    }
}

export{getGroups};