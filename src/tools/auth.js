import jwtDecode from 'jwt-decode'


let getTeacher = (token) => {
    try{
        let decoded = jwtDecode(token);
        console.log(decoded);
        if (decoded.role != 'teacher')
            return null;
        return decoded;
    }catch(e){
        console.log(e.message);
    }
}

let getAdmin = (token) => {
    try{
        let decoded = jwtDecode(token);
        console.log(decoded);
        if (decoded.role != 'admin')
            return null;
        return decoded;
    }catch(e){
        console.log(e.message);
    }
}


export {getTeacher};
