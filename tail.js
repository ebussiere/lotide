
const assertEqual = require('./assertEqual.js');
const tail = function(arr) {
  const result = arr.slice(1);
  assertEqual(result.length, arr.length - 1); // ensure we get back two elements
  assertEqual(result[0], arr[1]); // ensure first element is "Lighthouse"
  assertEqual(result[1], arr[2]); // ensure second element is "Labs"
  return result;
};
module.exports = tail;

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"
// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!