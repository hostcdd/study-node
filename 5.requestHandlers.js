function start(){
	console.log("这个请求来自于start");
};
function upload(){
	console.log("这个来自于upload");
}
exports.start = start;
exports.upload = upload;