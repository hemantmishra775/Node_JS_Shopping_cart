const express = require('express');
const http = require('http');
const path = require('path');
const bodyparser = require('body-parser')

const app = express();

const adminroutes = require('./routes/admin');
const shoproutes = require('./routes/shop');

app.use(bodyparser.urlencoded({ extended: true }));


app.use(adminroutes);
app.use(shoproutes);

//New_branch_practice
const Server = http.createServer(app);

Server.listen(3000,'localhost',function(){
    const address = Server.address().address;
    const port = Server.address().port;

    console.log(`Server is listening at http://${address}:${port}`);
})
