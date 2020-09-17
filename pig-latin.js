'use strict';
//Strip out unwanted platform and filename
let getArgs = function() {
  let newArray = process.argv.slice(2);
  return newArray;
};

const args = getArgs(process.argv);
const result = function() {
  let output = "";
  //For all args
  for (let i = 0; i < args.length; i++) {
    //get first letter of word
    let first = args[i][0];
    //get the rest of the letters of the word
    let rest = args[i].slice(1, args[i].length);
    //switch their orders and add result to output
    output = `${output}${rest}${first}ay `;
  }
  return output;
};
console.log(result());



