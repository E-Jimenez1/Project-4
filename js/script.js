/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/***
 * `quotes` array
***/
const quotes = [
  {
    quote:"It is only after we've lost everything that we are free to do anything. Redesign. Rebuild. Reclaim.",
    source:'Seth Rollins',
    citation:'Twitter',
    year:'2015',
    tags:'perserverance'
  },
  {
    quote:"So I wanted to use that as my platform to spread that message there are things that we cannot fight we cannot fight certain politics. But that doesn’t mean we should stop fighting because you can still spread your message and you can still make a difference.",
    source:'Kenny Omega',
    citation:'NJPW1972',
    year:'2018',
    tags:'steadfastness'
  },
  {
    quote:"When I can bring help to someone else, and it works, to see them having success brings me a lot of satisfaction.",
    source:'Kevin Owens',
    citation:'Les Anti-Pods De La Lutte',
    year:'2021',
    tags:'fulfillment'
  },
  {
    quote:"Without experimentation, a willingness to ask questions and try new things, we shall surely become static, repetitive, and moribund.",
    source:'Anthony Bourdain',
    citation:'Medium Raw: A Bloody Valentine to the World of Food and the People Who Cook',
    year:'2010',
    tags:'open-minded'
  },
  {
    quote:"Being honest about where you come from and what your story is is the only way to connect to other people, to really connect with them.",
    source:'Andrew Zimmern',
    citation:'BrightestYoungThings',
    year:'2017',
    tags:'honesty'
  }
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr) {
  const randomNum = Math.floor( Math.random() * arr.length);
  return arr[randomNum];
}

/***
 * `printQuote` function
***/
function printQuote() {
  const print = getRandomQuote(quotes);
  let fullQuote = `
    <p class="quote">${print.quote} </p>
    <p class="source">${print.source}
  `;
  if(print.citation){
    fullQuote += `<span class = "citation">${print.citation}</span>`;
  }
  if(print.year){
    fullQuote += `<span class = "year">${print.year}, </span>`;
  }
  if(print.tags){
    fullQuote += `<span class = "tags">${print.tags}</span>`;
  } 
  fullQuote += `</p>`;
  return document.getElementById('quote-box').innerHTML = fullQuote;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
