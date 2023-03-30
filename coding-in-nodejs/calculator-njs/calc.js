const express = require('express');
//Using body-parser allows you to access request
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);

    var result = n1 + n2;
    res.send("The addition of two numbers is : "+result);
})

app.listen(3000,function(){
        console.log("server is running on port 3000..")
});