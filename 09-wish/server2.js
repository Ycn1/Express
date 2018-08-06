const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');


const swig = require('swig');

mongoose.connect('mongodb://localhost:27017/ycn',{useNewUrlParser: true});

const db = mongoose.connection;

db.on('err',()=>{
    throw err;
});

db.once('open',()=>{

    console.log("mongodb connected...");
});

const app = new express();
//处理静态资源

swig.setDefaults({
    cache:false
});


app.engine ('html',swig.renderFile);

app.set('views', './views');

app.set('view engine' , 'html');


app.use(express.static('public'));


//当是一般的字符串的时候
app.use(bodyParser.urlencoded({ extended: false }));
 
//当是json的时候
app.use(bodyParser.json());

app.use('/',require('./routers/index.js'));

app.use('/wish',require('./routers/wish.js'));



app.listen(3000,()=>{
    console.log("server is running 127.0.0.1:3000")
});