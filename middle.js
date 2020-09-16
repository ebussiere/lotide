let eqArrays = function(arr0,arr1) {
  assertEqual(arr0.length, arr1.length);
  if (arr0.length === arr1.length) {
    for (let i = 0; i < arr0.length; i++) {
      assertEqual(arr0[i],arr1[i]);
    }
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const middle = function(array) {
  let result =[];
  let midLength = Math.floor(array.length/2);
  if (array.length > 2 && array.length%2===0 ) {
    result.push(array[midLength-1]);
    result.push(array[(midLength)]);
  }
  else if (array.length > 2 && array.length%2===1){
      result.push(array[(midLength)]);
  }
  return(result);
}

assertArraysEqual(middle([1]),[]) // => []
assertArraysEqual(middle([1, 2]),[]) // => []
assertArraysEqual(middle([1, 2, 3]),[2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]) // => [3, 4]



// middle([1]) // => []
// middle([1, 2]) // => []
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]