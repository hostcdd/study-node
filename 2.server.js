//node模块函数
/*
var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);
*/

//作为参数传递
var http = require("http");
var url = require("url");
function start(route){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		route(handle,pathname);

		response.writeHead(200,{"Context-Type":"text/plain"});
		response.write("Hello,World!");
		response.end();
	};
	http.createServer(onRequest).listen(8888);
};
//start();
exports.start = start;

