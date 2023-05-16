#!/usr/bin/node
// A script that convert string to an integer.
// @:

const intArg = process.argv[2];

if (!isNaN(parseInt(intArg))) {
  const firstArg = parseInt(intArg);
  console.log('My number:', firstArg);
} else {
  console.log('Not a number');
}
