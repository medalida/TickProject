const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../database");

//login
router.post('/login',(req, res)=>{
    let email = req.body.email;
    let password = req.body.passeord;

    try{
        token = getToken(email, password);
    }catch(e){
        res.status(400).send(e.message);
    }
});

//register
router.post('/register',(req, res)=>{
    let teacher = db.selectTeacher.get(email);
    if(teacher != undefined)
        res.status(400).send("Adress email already registered");
    try{
        db.insertWorkspace({
            name: req.body.name,
            logo: req.body.logo,
            admin_email: req.body.email,
            password: req.body.password
        });
        let teacher = db.selectTeacher.get(req.body.email);
        const token = jwt.sign(
            {
              _id: this._id,
              name: this.name,
              email: this.email,
              isAdmin: this.isAdmin
            },
            config.get("jwtPrivateKey")
          );
    }catch(e){
        res.status(400).send("Error while registering");
    }
});


module.exports = router;



let getToken = (email, password) => {
    let teacher = db.selectTeacher.get(email);
    if(teacher == undefined)
        throw new Error('email error');
}
