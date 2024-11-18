
const oneLinerJoke = require('one-liner-joke');

// Get a random joke
const randomJoke = oneLinerJoke.getRandomJoke();

// Output the joke to the console
console.log("Here's a random joke for you:");
console.log(randomJoke.body);