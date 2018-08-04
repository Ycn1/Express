 const Router = require('express').Router;

 var bodyParser = require('body-parser');
 
 const router = new Router();

//当是一般的字符串的时候
 router.use(bodyParser.urlencoded({ extended: false }))
 
//当是json的时候
router.use(bodyParser.json())

 

router.get('/',(req,res)=>{
	res.send('get data...');
});


router.post('/',(req,res)=>{
	// res.send('post data..');
	// let body ={};
	// res.on("data",(chunk)=>{
	// 	body += chunk;
	// });
	// res.on('end',(body)=>{
	// 	console.log(body);
	// })

	console.log(req.body);
});

router.put('/',(req,res)=>{
	res.send('put data...');
});

router.delete('/',(req,res)=>{
	res.send('delete data...');
})

module.exports = router;