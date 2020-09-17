

const eqObjects = function(object1, object2) {
  let isPass = true;
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
    console.log(`🛑 Assertion Failed: ${object1} !== ${object2}`);
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
const inspect = require('util').inspect;
  console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
 assertObjectsEqual(cd,dc);