//creating,removing & replacing element.

// create element
let elemx = document.createElement('li');
let tx = document.createTextNode('TextNode created');
elemx.appendChild(tx);
//add class name and id to created li element.
elemx.className = 'child_ul';
elemx.id = 'cr_li';
elemx.setAttribute('name','red'); 
// elemx.innerText = "Hello";

let ulx = document.querySelector('ul.ulist');
let addedchild = ulx.appendChild(elemx);


//*replace element


let elem2 = document.createElement('h1');
let tx2 =document.createTextNode('this is text node 2');
elem2.appendChild(tx2);
elem2.className = 'heading';
// console.log(elem2);

// let divv = document.querySelector('div.list');
 //divv.appendChild(elem2);

//  elemx.replaceWith(elem2);

//replace child

let elem3 = document.getElementById('first');
// elem3.replaceChild(elemx,document.getElementById('snd'))

//  getAttribe

// let exatt = elem3.getAttribute('id');
// console.log(exatt);

//  hasAttribute
let exatt = elem3.hasAttribute('href');

console.log(exatt);








