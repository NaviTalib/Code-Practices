let newObj = {
    objname:"Mobile",
    type:"Android",
    price:5000,
    feature:function(){
        return(this.objname+" "+this.type+" "+this.price)
    }//object method

}

//!Displaying Object Properties
// console.log(newObj.type);

//!Displaying the Object in a Loop
// for(let x in newObj){
//     console.log(newObj[x]);
// }

//!Using Object.values()

// console.log(Object.values(newObj));

//!Using JSON.stringify()
//?Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():
//JSON.stringify will not stringify functions:




console.log(JSON.stringify(newObj));