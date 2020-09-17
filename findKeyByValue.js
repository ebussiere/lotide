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

const findKeyByValue = function(object, value) {
  for (let item in object) {
    if (object[item]) {
      if (object[item] === value) {
        return item;
      }
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  talk: "Ellen",
  realEntertainment: "Jerry Springer"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Ellen"), "talk");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Jerry Springer"), "realEntertainment");