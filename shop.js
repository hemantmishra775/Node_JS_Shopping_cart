const express = require('express');

const router = express.Router();

//kya bolti hai git wali public

router.use('/',(req,res,next)=>
{
    console.log("404 Not Found");
    res.send("404 Error");
})


//New_branch_Practice
module.exports = router;
