//引入依赖
var express = require("express");
var utility = require("utility");
//建立实例
var app = express();

app.get('/',function(req,res){
	// 从 req.query 中取出我们的 q 参数。
	var q = req.query.q;
	// 调用 utility.md5 方法，得到 md5 之后的值
	var md5Value = utility.md5(q);
	//res.send(md5Value);
	res.send("<h1>"+q+"</h1>");
});
app.listen(3000,function(){
	console.log("这个来自3000");
});