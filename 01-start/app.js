const express = require('express');


const app = express();

// app.get('/',(req,res)=>{
// 	res.send('<h1>hello world</h1>');
// });

app.post('',(req,res)=>{
	res.send('<h1>hello world2</h1>');
})

 app.listen(3000,'127.0.0.1',()=>{
    console.log('server  running at 127.0.0.1:3000');
 });