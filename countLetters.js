const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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

const result1 = countLetters('Create a hypothesis of what will happen when you run your code now');
assertEqual(result1["c"], 2);




