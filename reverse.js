'use strict';
//Strip out unwanted platform and filename
let getArgs = function() {
  let newArray = process.argv.slice(2);
  return newArray;
};

const args = getArgs(process.argv);

for (let i = 0; i < args.length; i++) {
  let output = "";
  for (let j = args[i].length - 1; j >= 0; j--) {
    output = output + args[i][j];
  }
  console.log(output);
}
