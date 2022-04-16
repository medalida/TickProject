import axios from 'axios';

let Endpoint = "http://localhost:3001/";


let register = async(body)=>{
    delete body.confirmPassword;
    try{
        let data = await axios.post(Endpoint+'api/institution/register', body);
        console.log(data);
        localStorage.setItem('token', data.data);
        return {error : '', resolve : 'Your institution is successfully registered'}
    }catch(e){
        if(e.response && e.response.status === 400){
        return {error : e.response.data, resolve : ''}
        }
    }
}

let adminLogin = async(body)=>{
    try{
        let data = await axios.post(Endpoint+'api/institution/login', body);
        console.log(data);
        localStorage.setItem('token', data.data);
        return {error : '', resolve : 'You are successfully signed in'}
    }catch(e){
        if(e.response && e.response.status === 400){
        return {error : e.response.data, resolve : ''}
        }
    }
}

let teacherLogin = async(body)=>{
    try{
        let data = await axios.post(Endpoint+'api/auth/login', body);
        console.log(data);
        localStorage.setItem('token', data.data);
        return {error : '', resolve : 'You are successfully signed in'}
    }catch(e){
        if(e.response && e.response.status === 400){
        return {error : e.response.data, resolve : ''}
        }
    }
}

export {Endpoint, register};

/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsIm5hbWUiOiJpbnN0aXR1dGlvbiIsImxvZ28iOiJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2luc3RpdHV0aW9uL3JlZ2lzdGVyIiwiYWRtaW5FbWFpbCI6Im1lZGRzZmFsaTQ3QGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY1MDA2ODg3N30.dZRVr-EkfKYUjoJehQQmeuuJfYxuUBSp3NRqnitnJr4
*/
