#!/usr/bin/node
// script that prints a message depending on the number of arguments passed
// @a: if "No arguments passed"
// @b: if "Argument found"
// @c: otherwise "Arguments found"

const nArgs = process.argv.slice(2);
if (nArgs.length === 0) {
  console.log('No arguments');
} else if (nArgs.length === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
