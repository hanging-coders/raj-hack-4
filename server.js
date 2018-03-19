const express = require('express');
const bodyParse= require('body-parser');
const _ = require('lodash');
const hbs = require('handlebars');
var app = express();
//const {mongoose} = require('./db/mongoose');

const{ObjectID}= require('mongodb');
const time = new Date().getTime();

const port =  3000;


app.get('/',(req,res) => {

    res.render('home.hbs',{
    pageTitle : "Home page",
});
});



app.get('/why',(req,res) => {

    res.render('why.hbs',{
    pageTitle : "Home page",
});
});

app.get('/sms',(req,res) => {

    res.render('sms.hbs',{
    pageTitle : "Send Money Securely",
});
});

app.get('/contact',(req,res) => {

    res.render('contact.hbs',{
    pageTitle : "Contact Page",
});
});


app.listen(port, ()=>{
    console.log(`server is up on ${port}`);
});


module.exports= {app};


