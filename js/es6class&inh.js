/*What are the ES6 Classes?
ES6 Classes is the common JavaScript pattern of getting
the class-like inheritance hierarchies using functions and
prototypes. They are effectively simple compared to
prototype-based OO, offering a convenient declarative 
form for class patterns that encourage interoperability.

Here is an example of ES6 Classes in javaScript:*/

class Student{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    school(){
        return `${this.name} reads in MAPS`
    }

}

//inheritance

class Intern extends Student{
    constructor(name,age,gender,experince,language){
        super(name,age,gender);
        this.experince=experince;
        this.language=language;
    }
    company(){
        return `No company selected ${this.name} to do work :|`;
    }

}


const stu = new Intern("Talib",23,"M","fresher","JavaScript");
console.log(stu);