 const Router = require('express').Router;


 const router = new Router();

router.get('/',(req,res)=>{
	res.send('get data...');
});


router.post('/',(req,res)=>{
	res.send('post data..');
});

router.put('/',(req,res)=>{
	res.send('put data...');
});

router.delete('/',(req,res)=>{
	res.send('delete data...');
})

module.exports = router;