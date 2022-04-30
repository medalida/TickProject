let Endpoint = "http://localhost:3001/";

let getReqHeader = (isAdmin = false) => {
    let token_name;
    if(isAdmin===true) token_name = 'admin-token';
    else token_name = 'token';
    let token = localStorage.getItem(token_name);
    return {headers: {"x-auth-token" : token}};
}



export {Endpoint, getReqHeader};

