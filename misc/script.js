const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");
//Get quote From Api

async function getQuote() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    console.log(data);
    authorText.textContent = data.quoteAuthor;
    quoteText.textContent = data.quoteText;
  } catch (error) {
    //error
    getQuote();
    console.log("whoops !no quote", error);
  }
}

//onload

getQuote();
