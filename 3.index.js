//主函数，入口函数
var server = require("./2.server");
var route = require("./4.route");
var requestHandlers = require("./5.requestHandlers.js");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
server.start(route.route);
