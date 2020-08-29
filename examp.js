
var path = require('path');
var http = require("http");
var fs = require("fs");
http.createServer(function(req,res){
    fs.readFile('demo',function(err,data){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    
    });



}).listen(8080);
console.log("every thing is okay");
