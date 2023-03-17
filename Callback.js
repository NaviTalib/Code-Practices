function fetchData(url, callback) {
    // Make an HTTP request to the specified URL
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
  
    // Set up a callback function to be executed when the response is received
    xhr.onload = function() {
      if (xhr.status === 200) {
        // If the response was successful, call the callback function with the response data
        callback(xhr.responseText);
      } else {
        // If there was an error, call the callback function with an error message
        callback('Error: ' + xhr.status);
      }
    };
  
    // Send the HTTP request
    xhr.send();
  }
  
  // Example usage of the fetchData function with a callback function
  fetchData('https://jsonplaceholder.typicode.com/todos/1', function(response) {
    console.log(response);
  });
  