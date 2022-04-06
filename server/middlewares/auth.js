

let auth = (req, res, next)=>{
    let token = req.header("x-auth-token");
    if (!token) return res.status(401).send("Access denied. No token provided.");

    try {
        const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        req.user = decoded;
    next();
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
}

let isTecher = (req, res, next)=>{
    let user = req.user;
    if(user.role === "techer") next();
    else return res.status(401).send("Access denied. No token provided.");
}

let isAdmin = (req, res, next)=>{
    let user = req.user;
    if(user.role === "admin") next();
    else return res.status(401).send("Access denied. No token provided.");
}

module.exports = {isAdmin, isTecher, auth};