const assertEqual = function(actual, expected) {
  let isPass = true;
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    isPass=false;
  }
  console.log(isPass);
  return isPass;
};

const countLetters = function(letters) {
  let result = {};
  for (const letter of letters.toLowerCase()) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else  {
        result[letter] = 1;
      }
    }
  }
  return result;
};

//const result1 = countLetters('Create a hypothesis of what will happen when you run your code now');
const result1 = countLetters('Mississippi');

assertEqual(result1["m"], 1);
assertEqual(result1["i"], 4);
assertEqual(result1["r"], undefined);




