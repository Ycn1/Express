 const Router = require('express').Router;

 const WishModel = require('../Model/Wish2.js');


const Arrcolor = ['#f10','#ff6700','#ccc','#ff0','#f1f2f3'];


function getRandom(min,max)  {
	return Math.round(min + (max-min)*Math.random());
}

 const router = new Router();




router.post('/',(req,res)=>{
	// res.send('post data..');
	let obj = req.body;
		obj.color = Arrcolor[getRandom(0,Arrcolor.length-1)];

			WishModel.insertMany(obj,(err,docs)=>{
				let result = {};

				if(!err){
					result={
						status:0,
						data:docs[0]
					}
				}else{
					result={
						status:1,
						message:message
					}
				}

			let resultIson = JSON.stringify(result);
			res.end(resultIson);
			})
		

});


router.delete('/:id',(req,res)=>{
	// console.log(req.params.id);
	let id = req.params.id;
	WishModel.remove({_id:id},(err,data)=>{
			let result = {};

			if(!err){
				result = {status:0}

				let resultIson = JSON.stringify(result);
				res.end(resultIson);
			}
		})
})



 module.exports = router;
