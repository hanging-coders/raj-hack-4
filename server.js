const express = require('express');
const bodyParse= require('body-parser');
const _ = require('lodash');

const {mongoose} = require('./db/mongoose');

const{ObjectID}= require('mongodb');
const time = new Date().getTime();

const port =  3000;




var app = express();
app.use(bodyParse.json());


app.listen(port, ()=>{
    console.log(`server is up on ${port}`);
});


module.exports= {app};


