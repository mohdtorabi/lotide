
const middle = require('../middle');
const assert = require('chai').assert;



describe("#middle", () => {
  it("returns [1, 2] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), [1, 2]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]),[]);
  });

  it("returns Lighthouse for [Hello, Lighthouse, Labs] ", () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });

});
