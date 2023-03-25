console.log("Learning AJAX");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickhandler);

function buttonClickhandler(){
    console.log("you have clicked the fetchBtn.")
    //instantiate a xhr object
    const xhr =new XMLHttpRequest();

    //open xhr object
    //!GET request
    // xhr.open('GET','tal.txt',true);

    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);

    //!POST request
        xhr.open('POST','https://dummy.restapiexample.com/create',true);
        xhr.getResponseHeader('Content-type','application/json');

    //what to do on progress(optional)
    xhr.onprogress = function(){
        console.log("on progress");
    };

    //what to do when response is ready
    xhr.onload = function(){
        if(this.status===200){
        console.log(this.responseText);
    }
    else{
        console.log("some error occured.")
    }
    };
    params = `{"name":"test","salary":"123","age":"23"}	`;
    //send the request
    xhr.send(params); 

    console.log("we are done.")
}