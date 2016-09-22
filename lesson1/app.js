
var express = require("express");
var app = express();

app.get('/',function(request,response){
	response.send("hello,node");
});
app.listen(3000,function(){
	console.log("这个来自3000端口");
});

