//var http = require('http');
//http.createServer(function(request, response){
	//response.write("Hello World!");
	//response.end(); //close connection
//}).listen(80); //http port
var express = require("express");
var server = express();

server.use(express.static(__dirname+"/public")); //static file

//server.get("/", function(req,res){ //web ropt
//    res.send("Hello World!");//回傳固定内容
//});
//server,get("/md", function(req,res){ //other pages
//    res.send("req/md");
//});
server.listen(80);