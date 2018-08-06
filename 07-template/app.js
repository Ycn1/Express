 const express = require('express');

 const swig = require('swig');

const app = express();

//读取的都是最新的页面内容，不是从缓存读取的
swig.setDefaults({
	cache:false
});


app.engine ('html',swig.renderFile);

app.set('views', './views');

app.set('view engine' , 'html');

app.get('/data',(req,res)=>{
	res.render('data',{
		title:"kauzhu",
		name:"Lucy",
		obj :{
			name:"Anna",
			age:16
		},
		arr :["11",'22','33']
	})
});

app.get('/list',(req,res)=>{
	res.render('list');
});
app.get('/index',(req,res)=>{
	res.render('index');
});


 app.listen(3000,'127.0.0.1',()=>{
    console.log('server  running at 127.0.0.1:3000');
 });
