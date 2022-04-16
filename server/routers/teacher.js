const express = require("express");
const {isAdmin, auth} = require("../middlewares/auth");
const router = express.Router();


router.post('/add', [auth, isAdmin], (req, res)=>{

});





module.exports = router;