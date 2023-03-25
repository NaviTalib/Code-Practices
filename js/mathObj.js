let x=4,y=7.2,z;
// z=Math.PI;
z=Math.ceil(y);//rounded up to its nearest integer
z=Math.round(y);//rounded to its nearest integer
z=Math.floor(y);//rounded down to its nearest integer
z= Math.trunc(y);//Returns the integer part of y (new in ES6)
// console.log(z);
let myarr = [2,8,-1,72,0,-28];
z=Math.min.apply(null,myarr);//for find min in array
z=Math.max.apply(null,myarr);//for finding max in array

z= Math.random()//return  a random number between 0 and 1
z= Math.round(10*Math.random());// to  get random number between 0 and 10
z= Math.round(10+(50-10)*Math.random());//to get random number between 10 and 50
console.log(z);
