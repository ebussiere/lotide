
const chai = require('chai');
let assert = chai.assert;

const middle = require('../middle.js');
describe('#middle', () => {
  it('Passes for [1] to expect []', function() {
    assert.deepEqual(middle([1]), []);
  });
  it('Passes for [1,2] to expect []', function() {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('Fails for ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', function() {
    assert.deepEqual(middle(["YoYo", "Hello", "Lighthouse", "Labs"]), ["Hello", "Lighthouse"]);
  });
});



