//!JavaScript Promises
/*"I Promise a Result!"

"Producing code" is code that can take some time

"Consuming code" is code that must wait for the result

A Promise is a JavaScript object that links producing code and consuming code*/

/*When the producing code obtains the result, it should call one of the two callbacks:

Result	Call
Success	myResolve(result value)
Error	myReject(error object)*/

//!Promise Object Properties
//?The Promise object supports two properties: state and result.

//!myPromise.state 	//!myPromise.result
//"pending"	            undefined
//"fulfilled"	        a result value
//"rejected"	        an error object


