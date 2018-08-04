 const express = require('express');


const app = express();

//请求静态资源
// app.use(express.static('public'));

//设置虚拟路由
app.use("/static",express.static('public'));



// app.use('/user',require('./routes/user.js'));


 app.listen(3000,'127.0.0.1',()=>{
    console.log('server  running at 127.0.0.1:3000');
 });