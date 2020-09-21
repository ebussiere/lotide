const assertEqual = require('../assertEqual.js');
const tail = require('../tail.js');
const assertArraysEqual = require('../assertArraysEqual.js');
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
