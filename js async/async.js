//!Asynchronous JavaScript
/*"I will finish later!"

Functions running in parallel with other functions are called asynchronous

A good example is JavaScript setTimeout()*/

function enterNum(a,b){
    return a+b;
};

function sum(){
 console.log(enterNum(9,7));
};

setTimeout(sum,3000);
