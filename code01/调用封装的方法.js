const ss = require('./封装的创建静态服务器功能.js');
const path = require('path');
const fs = require('fs');
const http = require('http');
const mime = require('./mime.json');

http.createServer((req,res)=>{
	ss.staticServer(req,res,path.join(__dirname));
}).listen(3000,()=>{
	console.log('rungning...');
});