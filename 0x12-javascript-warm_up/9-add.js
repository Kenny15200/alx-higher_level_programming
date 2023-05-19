#!/usr/bin/node
// a script that prints the addition of 2 integers

const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

function add (a, b) {
  return a + b;
}
if (isNaN(a) || isNaN(b)) {
  console.log(NaN);
} else {
  const result = add(a, b);
  console.log(result);
}
