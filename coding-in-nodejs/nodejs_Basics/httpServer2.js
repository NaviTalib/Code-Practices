var http = require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("This is a html page displayed by node server.");
    res.end();
}).listen(3030);