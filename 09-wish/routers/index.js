 const Router = require('express').Router;

 const WishModel = require('../Model/Wish2.js');


 const router = new Router();



 router.get('/',(req,res)=>{
	// res.render('index');
	// res.end("index ok");
	WishModel.find({},(err,data)=>{
			if(!err){
				res.render('index',{
					data:data
				})
			}else{
				console.log(err);
			}
		})
});


 module.exports = router;
