//!Modules
/*JavaScript modules allow you to break up your code into separate files.

This makes it easier to maintain the code-base.

JavaScript modules rely on the import and export statements.

*/
//!Export
/*You can export a function or variable from any file.*/
//!Named Exports
/*You can create named exports two ways. In-line individually, or all at once at the bottom.*/
//!Default Exports
//You can only have one default export in a file.

//!Import
/*You can import modules into a file in two ways, based on if they are named exports or default exports.

Named exports are constructed using curly braces. Default exports are not.

*/
//!package.json file is used to set type module


import myFun from "./func.js";
import {myObj} from "./obj.js";
console.log(myFun(2,5));
console.log(myObj);
