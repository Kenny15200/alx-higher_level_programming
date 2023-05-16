#!/usr/bin/node
// Write a script that prints two arguments passed
//

if (process.argv[2] && process.argv[3]) {
  console.log(process.argv[2] + ' is ' + process.argv[3]);
} else if (process.argv[2] && process.argv[3] === undefined) {
  console.log(process.argv[2] + ' is ' + process.argv[3]);
} else {
  console.log('undefined is undefined');
}
