var http = require('http');

http.createServer(function(req,res){
    res.write("what's up");
    res.end();
}).listen(8080);