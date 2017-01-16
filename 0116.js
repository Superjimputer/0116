var http = require ("http");
//var server = http.createServer(
//function (request,response){
//    response.writeHead(200,{"Content-Type":"text/html"});
//    response.write("<h1>Hello Banana!</h1>");
//    response.end();
//});
//
//server.listen(12345);

var express = require("express");
var app = express();
//var server = http.createServer(app);

app.get("/",function(req,res){
    res.send("Hello World");
    res.end();
});

//server.listen(23456);
app.listen(23456);