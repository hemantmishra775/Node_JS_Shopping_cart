const express = require('express');

const router = express.Router();

router.get('/add_product',(req,res,next)=>
{
    res.send(`<html><form action='/product' method="POST"><input type="text" name="title"><button type="submit">submit</button></form></html>`)
})

router.post('/product',(req,res,next)=>
{   
    console.log("html");
    console.log(req.body);
    res.redirect('/');
})

//Hello World

module.exports = router;
