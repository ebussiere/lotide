const assertEqual = require('./assertEqual.js');
const assertArraysEqual = function(actual, expected) {
  const passMessage = `✅ Assertion Passed: ${actual} === ${expected}`;
  const failMessage = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  let message = passMessage;
  if (actual.length !== expected.length) {
    message = failMessage;
    return actual;
  } else {
    for (let i = 0; i < actual.length; i++) {
      assertEqual(actual[i], expected[i]);
    }
  }
  console.log(message);
};
module.exports = assertArraysEqual;





