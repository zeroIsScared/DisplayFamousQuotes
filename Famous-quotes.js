'use strict';
const quotes = [
    {
        author: "Neil Armstrong",
        quote: "That's one small step for a man, a giant leap for mankind."
    },
    {
        author: "Franklin D. Roosevelt",
        quote: "The only thing we have to fear is fear itself."
    },
    {
        author: "William Shakespeare",
        quote: "A rose by any other name would smell as sweet."
    },
    {
        author: "Thomas Edison",
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration."
    }
]

const button1 = document.getElementById('button');
const randomNumber = (num) => Math.floor(Math.random() * num);


function displayQuote() {

    const randomQuoteNum = randomNumber(quotes.length);

    if (document.querySelector("h2") && document.querySelector("h6")) {


        document.querySelector("h2").textContent = quotes[randomQuoteNum].quote;
        document.querySelector("h6").textContent = quotes[randomQuoteNum].author;
    } else {

        const quoteH2 = document.createElement("h2");
        quoteH2.textContent = quotes[randomQuoteNum].quote;
        const authorH6 = document.createElement("h6");
        authorH6.textContent = quotes[randomQuoteNum].author;
        const div = document.createElement('div');
        const body = document.body;
        div.setAttribute('id', '1');
        body.insertAdjacentElement("beforebegin", div);
        div.insertAdjacentElement("beforeend", quoteH2);
        div.insertAdjacentElement("beforeend", authorH6);

    }
}

button1.addEventListener("click", displayQuote);
