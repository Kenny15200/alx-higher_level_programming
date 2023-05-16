#!/usr/bin/node
// a script that prints the first argument passed
// If no arguments print "No argument"
//
if (process.argv[2]) {
  const firstArgs = process.argv[2];
  console.log(firstArgs);
} else {
  console.log('No Arguement');
}
