//!static method in javascript
//Static class methods are defined on the class itself.

// You cannot call a static method on an object, only on an object class.

class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello!!";
    }
  }
  
  let myCar = new Car("Ford");

  console.log(myCar)
  console.log(Car.hello())
  
