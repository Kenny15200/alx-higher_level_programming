#!/usr/bin/node
// script that prints a message depending on the number of arguments passed
// @a: if "No arguments passed"
// @b: if "Argument found"
// @c: otherwise "Arguments found"

const nArgs = process.argv.length - 2;
if (nArgs === 0) {
  console.log('No arguments passed');
} else if (nArgs === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
