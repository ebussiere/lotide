const chai = require('chai');
let assert = chai.assert;

const tail = require('../tail.js');
describe('#tail', () => {
  it('Passes ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', function() {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('Fails for ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', function() {
    assert.notDeepEqual(tail(["YoYo", "Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});