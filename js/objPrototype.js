
/*JavaScript is a prototype-based language. Whenever we create a function using JavaScript,
 the JavaScript engine adds a prototype property inside a function. The prototype property 
 is an object where we can attach methods and properties in a prototype object, which
 enables all the other objects to inherit these methods and properties.*/

/*As we know that all objects in JavaScript are instances of Object. A typical object 
inherits properties from Object.prototype. The Object.prototype object has many built-in 
methods and properties such as toString(), valueOf(), etc.*/

/*Methods and Description: 
hasOwnProperty(): It will return a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.
isPrototypeOf(): It will return a boolean indicating whether the specified object is in the prototype chain of the object, this method is called upon.
propertyIsEnumerable(): It will return a boolean that indicates whether the specified property is enumerable or not.
toLocaleString(): It will return the string in the local format.
toString(): It will return the string.
valueOf() :It will return the primitive value of the specified object.
*/







//Object literal : Object.prototype
let noodles ={
    name:"maggie",
    rate:14,
    quantity:"70 gm"
};
// console.log(noodles);

function product(name,rate,quantity){
    this.name=name;
    this.rate=rate;
    this.quantity=quantity;
};

product.prototype.getName = function(){
    return this.name;
};
product.prototype.setName =function(newName){
    this.name = newName;

}
let productObj = new product("localmaggie",10,"60 gm");
 console.log(productObj);



 