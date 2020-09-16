const assertArraysEqual = function(actual, expected) {
  const passMessage = `✅ Assertion Passed: ${actual} === ${expected}`;
  const failMessage = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  let message = passMessage;
  if (actual.length !== expected.length) {
    message = failMessage;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        message = failMessage;
      }
    }
  }
  console.log(message);
};

assertArraysEqual([1, 2, 3], [1, 2]); // => false
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false



