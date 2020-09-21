//let assertArraysEqual = require('./assertArraysEqual.js');
const middle = function(actual) {
  let result = [];
  let midLength = Math.floor(actual.length / 2);
  if (actual.length > 2 && actual.length % 2 === 0) {
    result.push(actual[midLength - 1]);
    result.push(actual[(midLength)]);
  }
  else if (actual.length > 2 && actual.length % 2 === 1) {
    result.push(actual[(midLength)]);
  }
  console.log(result);
  console.log(actual);
  return result;
};
module.exports = middle;
