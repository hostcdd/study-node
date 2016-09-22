function route(handle,pathname){
	console.log("这个请求来自于"+pathname);
	if (typeof handle[pathname] === 'function') {
	    handle[pathname]();
	} else {
	    console.log("No request handler found for " + pathname);
	}
}
exports.route = route;