/*Objects created using object literal 
are singletons, this means when a change is 
made to the object, it affects the object entire the script.
 Whereas if an object is created using constructor 
 function and a change is made to it, that change won't affect 
the object throughout the script.*/

//object literal for creating object
/*let student ={
    name:"Talib"
};
let newStudent = student;
console.log("student name before chenge-",student.name);
console.log("new student name before chenge-",newStudent.name);
newStudent.name = "Ali";
console.log("student name after chenge-",student.name);
console.log("new student name after chenge-",newStudent.name);
*/


//object creating using constructor function

let stu = function(){
    this.name="Talib";
};

let student = new stu();
let newStudent =new stu();
console.log("student name before chenge-",student.name);
console.log("new student name before chenge-",newStudent.name);
newStudent.name = "Ali";
console.log("student name after chenge-",student.name);
console.log("new student name after chenge-",newStudent.name);
