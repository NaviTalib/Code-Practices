var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){
    fs.readFile('./index.html',function(err,txt){
        res.writeHead(200,{"Context-Type":"text/html"});
        res.write(txt);
        return res.end();
    });
}).listen(8080)