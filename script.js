"use strict";
console.log("building quotes generator");

//Selecting DOM ELEMENTS
const newQuote = document.querySelector("#new-quote");
const quoteText = document.querySelector("#quote-text");
const author = document.querySelector(".author");

// Fectch Quote
const fetchQuote = function () {
  //loading state
  quoteText.textContent = "...loading";
  author.textContent = `-- `;
  //fetching state
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      //display state
      quoteText.textContent = data.content;
      author.textContent = `-- ${data.author}`;
    });
};

//Display quote to UI
newQuote.addEventListener("click", fetchQuote);
