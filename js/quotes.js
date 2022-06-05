const quotes = [
  {
    quote: "Nothing's better than the wind to your back, the sun in front of you, and your friends beside you.",
    author: "Aaron Douglas Trimble",
  },
  {
    quote: "It's a lot like nature. You only have as many animals as the ecosystem can support and you only have as many friends as you can tolerate the bitching of.",
    author: "Randy K. Milholland",
  },
  {
    quote: "Books are the quietest and most constant of friends; they are the most accessible and wisest of counsellors, and the most patient of teachers.",
    author: "Charles W. Eliot",
  },
  {
    quote: "All would live long, but none would be old.",
    author: "Benjamin Franklin",
  },
  {
    quote: "The wisest men follow their own direction.",
    author: "Euripides",
  },
  {
    quote: "Those who dream by day are cognizant of many things which escape those who dream only by night.",
    author: "Edgar Allan Poe",
  },
  {
    quote: 'The worst is not So long as we can say, "This is the worst."',
    author: "William Shakespeare",
  },
  {
    quote: "Fear cannot be without hope nor hope without fear.",
    author: "Baruch Spinoza",
  },
  {
    quote: "He that lives upon hope will die fasting.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Time cools, time clarifies; no mood can be maintained quite unaltered through the course of hours.",
    author: "Mark Twain",
  },
]
const $quote = document.querySelector('#quotes span.quote');
const $author = document.querySelector('#quotes span.author');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

$quote.innerText = todayQuote.quote;
$author.innerText = todayQuote.author;