const express = require('express');


const app = express();

app.get('/',(req,res)=>{
	res.send('get data...');
});

app.get('/abc',(req,res)=>{
	res.send('get data...');
});

app.post('',(req,res)=>{
	res.send('post data..');
});

app.put('',(req,res)=>{
	res.send('put data...');
});

app.delete('',(req,res)=>{
	res.send('delete data...');
})
app.use(express.static('public'));
 app.listen(3000,'127.0.0.1',()=>{
    console.log('server  running at 127.0.0.1:3000');
 });