//const assertEqual = require('../assertEqual.js');
const head = require('../head.js');

const chai = require('chai');
let assert = chai.assert;

describe('#head', () => {
  it('returns 5 for [5, 6, 7]', function() {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it('returns fail for 5 to be head of [11]', () => {
    assert.notEqual(head([11]), 5);
  });

  it('returns 5 for [5, 6, 7]', () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it('returns fail for 5 to be head of []', function() {
    assert.notEqual(head([]), 5);
  });
});


