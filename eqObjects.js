const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  const ob1Keys = Object.keys(object1);
  const ob2Keys = Object.keys(object2);
  if (ob1Keys.length === ob2Keys.length) {
    for (let k of ob1Keys) {
      assertEqual(object1[k],object2[k]);
    }
  }
};

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
  comedy:"Brooklyn Nine-Nine",
  drama:"The Wire",
  talk:"Ellen",
  realEntertainment:"Jerry Springer"
};

eqObjects(ab, ba); // => true
eqObjects(bestTVShowsByGenre1, bestTVShowsByGenre2); // => true
eqObjects(bestTVShowsByGenre1, bestTVShowsByGenre3); // => false
eqObjects(bestTVShowsByGenre2, bestTVShowsByGenre3); // => false