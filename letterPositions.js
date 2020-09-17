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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else  {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("hello").o, [4]);

console.log(letterPositions("lighthouse labs"));
assertArraysEqual(letterPositions("lighthouse labs").l, [0,11]);
assertArraysEqual(letterPositions("lighthouse labs").i, [1]);
assertArraysEqual(letterPositions("lighthouse labs").g, [2]);
assertArraysEqual(letterPositions("lighthouse labs").h, [3,5]);
assertArraysEqual(letterPositions("lighthouse labs").t, [4]);
assertArraysEqual(letterPositions("lighthouse labs").o, [6]);
assertArraysEqual(letterPositions("lighthouse labs").u, [7]);
assertArraysEqual(letterPositions("lighthouse labs").s, [8,14]);
assertArraysEqual(letterPositions("lighthouse labs").e, [9]);
assertArraysEqual(letterPositions("lighthouse labs").a, [12]);
assertArraysEqual(letterPositions("lighthouse labs").b, [13]);
