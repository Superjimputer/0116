var http = require("http");
var express = require("express");
var app = express();//宣告express
//var server = http.createServer(app);//啟用express

app.get("/",function(req,res){
    res.send("HEELO BANANA");
    res.end();
});

//server.listen(3000);
app.listen(1234);