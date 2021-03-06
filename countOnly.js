// FUNCTION IMPLEMENTATION
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

const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let item in itemsToCount) {
    if (itemsToCount[item]) {
      let count = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === item) {
          count++;
        }
        if (count > 0) {
          result[item] = count;
        }
      }
    }
  }
  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);