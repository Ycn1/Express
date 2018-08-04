 const http = require('http');

 let express = function(){

	let fns = [];

	let app = function(req,res){
		let i = 0;

		function next(req,res,next){
			let fn = fns[i++];

			if(!fn){
				return;
			}else{
				fn(req,res,next);
			}

			
		}
		next();
	}	// next(req,res,next);
	app.use = function(fn){
				fns.push(fn);
	}
		
	return app;
}

	let app = new express();

	app.use((req,res,next)=>{
		console.log("before A ");
		next();
		console.log("after A ");

	});
	app.use((req,res,next)=>{
		console.log("before B ");
		next();
		console.log("after B ");

	});
	app.use((req,res,next)=>{
		console.log("before C ");
		next();
		console.log("after C ");

	});
    const  server = http.createServer(app);

	 server.listen(3000,'127.0.0.1',()=>{
	 	console.log('server  running at 127.0.0.1:3000');
	 });

