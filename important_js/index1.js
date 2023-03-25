console.log("JavaScript important.......topics");
//for selecting a single element
let paraSelector = document.getElementById('para');

// paraSelector.innerHTML="<b>HELLO</b>";
paraSelector.style.color="blue";

// for selecting multiple element
let listSelector = document.querySelectorAll('li');

//creating an element

let ulSelector = document.querySelector('.listClass');
let newElement = document.createElement('li');
newElement.className ='newClass';
newElement.id="newId";
newElement.innerHTML="hello";
ulSelector.append(newElement);

//removing an element

// ulSelector.removeChild(ulSelector.children[0]);

//replacing an element
let elementToReplace = document.createElement('li');
ulSelector.appendChild(elementToReplace);

elementToReplace.innerHTML=`<a href="https://www.google.com/" target="blank">Google</a>`;

ulSelector.replaceChild(elementToReplace,ulSelector.childNodes[0]);

// Event Listner

let three = document.getElementById('i3');
 three.addEventListener('mouseover',myfun);
 three.addEventListener('mouseleave',myfun2);
 three.addEventListener('click',myfun3)
function myfun(){
    three.innerHTML="mouseover"
}

function myfun2(){
    three.innerHTML = "mouseleave";
}

function myfun3(){
    three.innerHTML = "clicked";
}

let inputText = document.getElementById('inp');
let btn = document.getElementById('btn');
btn.addEventListener('click',enterValue);
function enterValue(){
    if(inputText.value==""){
        alert("Enter something to text box");
    }
    else{
    let newElement = document.createElement('li');
    newElement.innerHTML = inputText.value;
    ulSelector.appendChild(newElement);
    }    

}


