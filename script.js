"use strict";
console.log("building quotes generator");
// fetch("https://api.github.com/users/bradtraversy").then((response) =>
//   console.log(response.json())
// );

//Selecting DOM ELEMENTS
const newQuote = document.querySelector("#new-quote");
const quote = document.querySelector("#quote");

// Fectch Quote
const fetchQuote = function () {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(`${data.author} said, "${data.content}"`);
      quote.textContent = data.content;
    });
};

//Display quote to UI
newQuote.addEventListener("click", fetchQuote);
