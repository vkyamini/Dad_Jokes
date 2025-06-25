var API = 'https://icanhazdadjoke.com/';
var header = document.querySelector('#header');
var jokes_display = document.querySelector("#jokes_display");
var fetchButton = document.querySelector("#fetchButton");
var searchJokes = document.querySelector('#button'); 
var input = document.createElement('input');



function getJokes(){
    console.log("jokes");
    fetch(API, {
        headers: { Accept: "application/json" }
      })
    .then(function(response){
        return response.json();
    }).then(function(data){
        var jokesdis = document.createElement('p');
        jokes_display.append(jokesdis);
        jokesdis.setAttribute("style","text-align: center; color: chocolate;");
        jokesdis.textContent = data.joke;
    })
}
fetchButton.addEventListener("click",getJokes);
//searchJokes.addEventListener("click",getInput)
   
function getInput(){
   
    var inputsearch = input.value;
    fetch('https://icanhazdadjoke.com/search?term='+inputsearch, {
        headers: { Accept: "application/json" }
      })
    .then(function(response){
        return response.json();
    }).then(function(data){
        var jokesdis = document.createElement('p');
        jokesdis.setAttribute("style","text-align: center; color: chocolate; font-weight: bolder;");
        jokes_display.append(jokesdis);
       
        jokesdis.textContent = data.results[0].joke;
       
    })
}


/**
 * 1. Get value of the input field.
 * 2. Create an event listener for on-click search button
 * 3. Create a function that's called on-click which takes the input field value and appends it to the API endpoint
 */


