const quotes = [
  {
    quote: "We cannot solve problems with the kind of thinking we employed when we came up with them.",
    author: "Albert Einstein",
  },
  {
    quote: "Learn as if you will live forever, live like you will die tomorrow.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
    author: "Thomas Edison",
  },
  {
    quote: "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
    author: "Steve Jobs",
  },
  {
    quote: "I never dreamed about success. I worked for it.",
    author: "Estée Lauder",
  },
  {
    quote: "You've got to get up every morning with determination if you're going to go to bed with satisfaction.",
    author: "George Lorimer",
  },
  {
    quote: "Just one small positive thought in the morning can change your whole day.",
    author: "Dalai Lama",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    quote: "I will not lose, for even in defeat, there’s a valuable lesson learned, so it evens up for me.",
    author: "Jay-Z",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;

author.innerText = todaysQuote.author;