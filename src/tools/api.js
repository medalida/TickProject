let Endpoint = "http://localhost:3001/";

let getReqHeader = ()=>{
    let token = localStorage.getItem('admin-token');
    return {headers: {"x-auth-token" : token}};
}
export {Endpoint, getReqHeader};

