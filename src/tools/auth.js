import jwtDecode from 'jwt-decode'


let getTeacher = (token) => {
    try{
        let decoded = jwtDecode(token);
        if (decoded.role != 'teacher')
            return null;
        return decoded;
    }catch(e){
        console.log(e.message);
        return null;
    }
}

let getAdmin = (token) => {
    try{
        let decoded = jwtDecode(token);
        if (decoded.role != 'admin')
            return null;
        return decoded;
    }catch(e){
        console.log(e.message);
        return null;
    }
}

export {getTeacher, getAdmin};
