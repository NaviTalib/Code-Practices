//!JavaScript Function apply()
//?With the apply() method, you can write a method that can be used on different objects.


const person ={
     fullname:function(){
        return this.firstname+" "+this.secondname;
    }
 };

const person1 = {
     firstname:"talib",
     secondname:"ali"
 }

 const x=person.fullname.apply(person1);

 console.log(x);


