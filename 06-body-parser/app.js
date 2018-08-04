 const express = require('express');


const app = express();

app.use(express.static('public'));


app.use('/user',require('./routes/user.js'));


 app.listen(3000,'127.0.0.1',()=>{
    console.log('server  running at 127.0.0.1:3000');
 });