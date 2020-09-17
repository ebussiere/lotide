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



const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === false) {
      results.push(item);
    }
    else {
      return results;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log('---');
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
// [1, 2, 5, 7, 2];
// ---
//   ['I\'ve', 'been', 'to', 'Hollywood'];