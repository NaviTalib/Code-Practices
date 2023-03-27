var http = require('http');
//server object is created
http.createServer(function(req,res){
    res.write("hello world"); //write response to client
    res.end(); //end the response
}).listen(8080); //the server object listens on port

