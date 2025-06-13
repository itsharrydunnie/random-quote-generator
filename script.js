"use strict";
console.log("building quotes generator");
// fetch("https://api.github.com/users/bradtraversy").then((response) =>
//   console.log(response.json())
// );

//Selecting DOM ELEMENTS
const newQuote = document.querySelector("#new-quote");
const quoteText = document.querySelector("#quote-text");
const author = document.querySelector(".author");

// Fectch Quote
const fetchQuote = function () {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(`${data.author} said, "${data.content}"`);
      quoteText.textContent = data.content;
      author.textContent = `-- ${data.author}`;
    });
};

//Display quote to UI
newQuote.addEventListener("click", fetchQuote);
