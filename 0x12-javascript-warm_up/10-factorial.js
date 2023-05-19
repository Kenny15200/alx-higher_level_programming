#!/usr/bin/node

// A script that computes and displays a factorial
// The factorial of 0 is defined as 1
// Recursive method using function calls
const num = parseInt(process.argv[2]);

function factorial (num) {
  if (isNaN(num) === 1 || num < 0) {
    console.log(1);
    return;
  }

  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
const result = factorial(num);
console.log(result);
