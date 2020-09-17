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
      if (actual[i] !== expected[i]) {
        message = failMessage;
        isPass = false;
      }
    }
  }
  console.log(message);
  console.log(isPass);
  return isPass;
};

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

const eqObjects = function(object1, object2) {
  const inspect = require('util').inspect;
  const ob1Keys = Object.keys(object1);
  const ob2Keys = Object.keys(object2);
  if (ob1Keys.length === ob2Keys.length) {
    for (let k of ob1Keys) {
      if (Array.isArray(object1[k]) && Array.isArray(object2[k])) {
        assertArraysEqual(object1[k],object2[k]);
      }else{
        assertEqual(object1[k],object2[k]);
      }
    } 
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };


const cd2 = { c: "1", d: ["2", 3, 4] };


 const ab = { a: "1", b: "2" };
 const ba = { b: "2", a: "1" };

 const bestTVShowsByGenre1 = {
  sciFi:"The Expanse",
  comedy:"Brooklyn Nine-Nine",
  drama:"The Wire",
  talk:"Ellen",
  realEntertainment:"Jerry Springer"
};

const bestTVShowsByGenre2 = {
  sciFi:"The Expanse",
  comedy:"Brooklyn Nine-Nine",
  drama:"The Wire",
  talk:"Ellen",
  realEntertainment:"Jerry Springer"
};

const bestTVShowsByGenre3 = {
  sciFi:"Star Trek",
  realEntertainment:"Jerry Springer"
};

eqObjects(ab, ba); // => true
eqObjects(cd, dc); // => true
eqObjects(cd, cd2); // => false
eqObjects(bestTVShowsByGenre1, bestTVShowsByGenre2); // => true
eqObjects(bestTVShowsByGenre1, bestTVShowsByGenre3); // => false
eqObjects(bestTVShowsByGenre2, bestTVShowsByGenre3); // => false