//!JavaScript Callbacks
/*"I will call back later!"

A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished

*/
//!Function Sequence

function myDisplayer(txt){
console.log(txt)
};

function myFirst() {
   return myDisplayer("Hello");
  };
  
  function mySecond() {
   return  myDisplayer("Goodbye");
  };

  
  mySecond();

myFirst();
