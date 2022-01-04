const express = require('express');

const router = express.Router();



router.use('/',(req,res,next)=>
{
    console.log("404 Not Found");
    res.send("404 Error");
})



module.exports = router;
