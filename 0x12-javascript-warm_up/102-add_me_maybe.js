#!/usr/bin/node
// a function that increments and calls a function.

function addMeMaybe (nb, theFunction) {
  nb++;
  theFunction(nb);
}
module.exports.addMeMaybe = addMeMaybe;
