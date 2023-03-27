const fs = require('fs');
fs.readFile('node-app/demo.txt','utf-8',function(err, txt){
    console.log(txt);
});
