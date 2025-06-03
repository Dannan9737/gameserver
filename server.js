//var http = require('http');
//http.createServer(function(request, response){
	//response.write("Hello World!");
	//response.end(); //close connection
//}).listen(80); //http port
var express = require("express");
var server = express();

var bodyParser = require("body-parser");	

server.use(express.static(__dirname+"/public")); //static file
server.use(bodyParser.urlencoded({extended:true})); //parse urlencoded data
server.use(bodyParser.json()); //parse json data

const Datastore = require('nedb-promises')
let GameDB = Datastore.create(__dirname+'/game.db')

//server.get("/", function(req,res){ //web ropt
//    res.send("Hello World!");//回傳固定内容
//});
server,get("/score", function(req,res){ //other pages
	console.log(req.query);
     res.send("req /md");
 });

 server.post("/rank", (req,res)=>{

 })
  server.post("/postscore", (req,res)=>{
	 console.log(req.body);
	 //save to db
	 GameDB.insert(req.body);
	 //find and sort and limit
	 res.send([{name:"MD", rank:1},{name:"Jhon",rank:2}]);
  });

server.listen(80);