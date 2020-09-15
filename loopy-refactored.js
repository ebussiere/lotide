const loopyLighthouse = function(range, multiples, words) {
  for (let x = range[0]; x <= range[1]; x++) {
    let y = x;
    if (x % (multiples[0] * multiples[1]) === 0) {
      y = words[0] + words[1];
    } else if (x % multiples[0] === 0) {
      y = words[0];
    } else if (x % multiples[1] === 0) {
      y = words[1];
    } 
    console.log(y);
  }
};
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);