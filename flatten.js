// const assertArraysEqual = function(actual, expected) {
//   const passMessage = `✅ Assertion Passed: ${actual} === ${expected}`;
//   const failMessage = `🛑 Assertion Failed: ${actual} !== ${expected}`;
//   let message = passMessage;
//   if (actual.length !== expected.length) {
//     message = failMessage;
//   } else {
//     for (let i = 0; i < actual.length; i++) {
//       if (actual[i] !== expected[i]) {
//         message = failMessage;
//       }
//     }
//   }
//   console.log(message);
// };

// let eqArrays = function(arr0,arr1) {
//   assertEqual(arr0.length, arr1.length);
//   if (arr0.length === arr1.length) {
//     for (let i = 0; i < arr0.length; i++) {
//       assertEqual(arr0[i],arr1[i]);
//     }
//   }
// };

const flatten = function(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === true) {
      for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  console.log(result);
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]







// assertArraysEqual([1, 2, 3], [1, 2]); // => false
// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false