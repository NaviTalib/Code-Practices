//!inhertance
//To create a class inheritance, use the extends keyword.

//? The super() method refers to the parent class.

// By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.




class newStudent {
    constructor(sname,age,gender,course){
        this.name=sname;
        this.age=age;
        this.gender=gender;
        this.course=course
    }
    isActive(){
        return "YES";
    }
}

class stuFunction extends newStudent{
    constructor(sname,age,gender,course,phone){
        super(sname,age,gender,course);
        
        this.phone=phone;
    }
    status(){
        return "He is perfect.";
    }
}

let stuInfo = new stuFunction("Talib",23,"M","BCA",12345);

console.log(stuInfo.isActive())
