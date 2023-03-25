
//addEventListener
//.addEventListener("event",funtion)
document.getElementById("heading").addEventListener("click", function() {
  // alert("hello there.");
  document.getElementById("heading").innerHTML="Changed";
  document.getElementById("heading").style.color="red";
  document.getElementById("heading").style.fontSize="100px";

});

let x=document.getElementById("ch1");
x.addEventListener("mouseover",myfun);
x.addEventListener("mouseleave",myfun2);
function myfun(){
  x.innerHTML="read";

}
function myfun2(){
  x.innerHTML="check";

}

let y = document.getElementById("heading");
y.addEventListener("mouseover",myfun3);

y.addEventListener("mouseleave",myfun4);
function myfun3(){
  y.style.color="red";
}
function myfun4(){
  y.style.color="blue";

}

