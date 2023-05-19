#!/usr/bin/node

// A script that searches the second biggest integer in the list of arguments.
// @: Convert argument to an integer
// @: Access the list of arguments
// @: If no args passed: print 0
// @: If the number of args is 1: print 0

const allArgs = process.argv.slice(2);

if (allArgs.length === 0) {
  console.log(0);
} else if (allArgs.length === 1) {
  console.log(0);
} else {
  let firstArg = parseInt(allArgs[0]);
  let secondArg = parseInt(allArgs[1]);

  if (secondArg > firstArg) {
    [firstArg, secondArg] = [secondArg, firstArg];
  }

  for (let i = 2; i < allArgs.length; i++) {
    const num = parseInt(allArgs[i]);
    if (num > firstArg) {
      secondArg = firstArg;
      firstArg = num;
    } else if (num > secondArg && num !== firstArg) {
      secondArg = num;
    }
  }

  console.log(secondArg);
}

