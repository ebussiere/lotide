const assertArraysEqual = function(actual, expected) {
  let isPass = true;
  const passMessage = `✅ Assertion Passed: ${actual} === ${expected}`;
  const failMessage = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  let message = passMessage;
  if (actual.length !== expected.length) {
    message = failMessage;
    isPass = false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      assertEqual(actual[i], expected[i]);
    }
  }
  console.log(message);
  return isPass;
};

const assertEqual = function(actual, expected) {
  let isPass = true;
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    isPass = false;
  }
  return isPass;
};

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

console.log(results1);