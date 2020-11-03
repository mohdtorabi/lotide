const eqArrays = require('../eqArrays');
const assert = require('chai').assert;





describe("#eqArrays", () => {
  it("returns true for [1, 2, 3], [3, 2, 1]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
  });

  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
  });

  it("returns true for [1, 2, 3], [1, 2, 3] ", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

});
