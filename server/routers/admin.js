const express = require("express");
const { route } = require("./attendance");
const Joi = require("joi");
const {isAdmin, auth} = require("../middlewares/auth");
const router = express.Router();

const schema = Joi.object({
    name : Joi.string().pattern(new RegExp('^[a-zA-Z]+$')).required(),
    email : Joi.string().email().required(),
    password : Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required()
});

router.post('/login', (req, res) => {
    
    res.json({Joi: schema.validate({name: 'moh', email:"medalida47@gmail.com", password: "1235678"})});
});

router.post('/register', (req, res) => {

});

router.post('/add-techer',[auth, isAdmin], (req, res) => {

});





module.exports = router;