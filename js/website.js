// let a = window.document;
// a = document.all;
// console.log(a);

/*element selector
1. single element selector
2. multi element selector 
*/
  
// 1.single selector

let element = document.getElementById('ch1');

// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'white';
element.innerText = "hello";

let sel = document.querySelector('#ch1');
sel = document.querySelector('.box');
sel = document.querySelector('div');
// sel.style.color= "blue";
// console.log(sel);

//2. multi element selector

let elem = document.getElementsByClassName('box');

// for(let i=0;i<elem.length;i++){
//     console.log(elem[i]);
// }

elem = document.getElementsByTagName('div');



//children, parent & Traversing the DOM.
//querySelector() and querySelectorAll() is uses to traverse downnward from a specific element.

const newElem = document.querySelector('.ulist');
// const i_newElem =  newElem.childNodes;
// const i_newElem =  newElem.children;
// const i_newElem =  newElem.firstChild;
// const i_newElem =  newElem.firstElementChild;
// const i_newElem =  newElem.lastChild;

// const i_newElem =  newElem.lastElementChild;


// console.log(i_newElem);

//selecting a specific child

const  li_list = document.querySelectorAll('li');
const f = li_list[0];
const  s = li_list[1];
// console.log(f);
// console.log(s.parentElement);
// console.log(s.nextElementSibling);



