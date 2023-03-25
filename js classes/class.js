class Student{
    constructor(sname,age,course){
        this.sname=sname;
        this.age=age;
        this.course=course;
    }
    status(){
        return "In college";
    }
    isSkilled(){
        return "fresher";
    }

}

let stu = new Student("Talib",23,"BCA");

console.log(stu.status());