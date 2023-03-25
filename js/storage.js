

//create entries
localStorage.setItem('Name','Talib');
localStorage.setItem('Name2','Ali');
localStorage.setItem('Name3','Talib');

//read entries
let x  = localStorage.getItem('Name');
// console.log(x);

//update entries

localStorage.setItem('Name','Navi');

//delete entries

localStorage.removeItem('Name2');

//localStorage.clear();  is used to clear everything


//storing JSON objects

let name2 = ['Navi','Talib'];
localStorage.setItem('Namex',JSON.stringify(name2));


//read JSON object
let namex = JSON.parse(localStorage.getItem('Namex'));
console.log(namex);




