const express = require("express");
const router = express.Router();

//login
router.get('/',(req, res)=>{
res.send("hello word");
});

//register
router.post('/',(req, res)=>{

});

module.exports = router;