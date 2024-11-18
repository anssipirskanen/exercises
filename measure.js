
const { performance } = require('perf_hooks');

// Start measuring time
const start = performance.now();

// Perform a long operation: summing numbers from 1 to 10 million
let sum = 0;
for (let i = 1; i <= 10_000_000; i++) {
  sum += i;
}

// End measuring time
const end = performance.now();

// Output the result
console.log(`The sum of numbers from 1 to 10 million is: ${sum}`);
console.log(`Execution time: ${(end - start).toFixed(2)} milliseconds`);
