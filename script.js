// This function is called once on page load:
function setup(){
    // Set an interval to run fetchText() every 5 seconds:
    setInterval(fetchText, 5000);
}

// Make an HTTP call to get a text file:
function fetchText(){
    // Parameters for the HTTP/S call
    let params = {
        mode: 'cors',   
        headers: {  // any HTTP headers you want can go here
            'accept': 'application/text'
        }
    }

    // Make the HTTP/S call:
    fetch('log.json', params)
        .then(response => response.text())  // convert response to text
        .then(data => getResponse(data))    // get the body of the response
        .catch(error => getResponse(error));    // if there is an error
}

// Function to call when you've got something to display:
function getResponse(data){
    document.getElementById("result").innerHTML = data;
}

// This is a listener for the page to load.
// This is the command that actually starts the script:
window.addEventListener('DOMContentLoaded', setup);
