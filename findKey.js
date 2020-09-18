const assertEqual = function(actual, expected) {
  let isPass = true;
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    isPass = false;
  }
  console.log(isPass);
  return isPass;
};

const findKey = function(object, callback) {
  let itemsArray = [];
  for (let name in object) {
    let stars = object[name]["stars"];
    itemsArray.push({ name, stars });
  }
  let itemOfInterest = itemsArray.find(callback);
  return itemOfInterest.name;
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
},
  x => x.stars === 2), "noma");
