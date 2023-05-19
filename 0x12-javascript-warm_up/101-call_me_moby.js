#!/usr/bin/node
// a function that executes x times a function.
/* The function must be visible from outside
 * Prototype: function (x, theFunction)
 */

function callMeMoby (x, theFunction) {
  if (x > 0) {
    theFunction();
    callMeMoby(x - 1, theFunction);
  }
}
module.exports.callMeMoby = callMeMoby;
