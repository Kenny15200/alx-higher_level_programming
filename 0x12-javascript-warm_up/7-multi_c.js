#!/usr/bin/node
// a script that prints x times “C is fun”
if (process.argv.length < 3) {
  console.log('Missing number of occurrences');
} else {
  const x = parseInt(process.argv[2]);
  if (isNaN(x)) {
    console.log('Missing number of occurrences');
  } else {
    for (let i = 0; i < x; i++) {
      console.log('C is fun');
    }
  }
}
