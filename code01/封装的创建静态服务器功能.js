const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');

exports.staticServer = (req,res,root)=>{
	fs.readFile(path.join(root,req.url),(err,data)=>{
		if(err) {
			res.writeHead(404,{
				'Content-Type':'text/plain;charset=utf8'
			});
			res.end('狗狗被压面叼走了！');
		}else {
			let dtype = '';
			let ext = path.extname(req.url);
			if(mime[ext]) {
				dtype = mime[ext];
			}
			if(dtype.startsWith('text')) {
				dtype+=";charset=utf8";
			}
			if(dtype.startsWith('application')){
				dtype+=";charset=utf8";
			}
			res.writeHead(200,{
				'Content-Type':dtype
			});
			res.end(data);
		}
	});
}