/*ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

JavaScript Classes are templates for JavaScript Objects.

*/

// !JavaScript Class Syntax
//? Use the keyword class to create a class.

//? Always add a method named constructor():

// !Syntax
// class ClassName {
//   constructor() { ... }
// }

class Student{
    constructor(name,stand,age){
        this.name=name;
        this.stand=stand;
        this.age=age;

    }
    status(){
        return "In school";
    }
}

let stu = new Student("Talib",12,19);
console.log(stu.status());