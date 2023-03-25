//!Throw, and Try...Catch...Finally
/*The try statement defines a code block to run (to try).

The catch statement defines a code block to handle any error.

The finally statement defines a code block to run regardless of the result.

The throw statement defines a custom error.*/

//?Syntax
/*try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
}*/
function Er(x){
    try{
    if(x==''){
        throw "is empty";
    }
    if(isNaN(x)){
        throw "not a number";
    }
    x = Number(x);
    if(x > 10){
         throw "is too high";
        }
    if(x < 5){ 
        throw "is too low";
    }   
} 
    catch(err){
        this.err=err;
        console.log("Error:"+this.err);
    }
    finally{
        console.log(x);
    }
}
Er("")

