/*Arrow functions were introduced in ES6.

Arrow functions allow us to write shorter function syntax:

*/

//!Before

let myfun = function(){
    console.log("Hello normal function");
}

//!After
let myNewfun =()=>{
    console.log("This is My Arrow function")
}

//!Arrow Functions Return Value by Default:

let hello = () => console.log("This is default value arrow function");

//!Arrow Function With Parameters:


let add = (a,b)=> console.log(a+b);

//!Arrow Function Without Parentheses:
let stuName = sname => console.log("Hello "+sname);
stuName("Talib")
