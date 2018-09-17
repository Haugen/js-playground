"use strict";

// Use minimal setup.
mocha.setup("bdd");
// Making chai.assert global in assert.
let assert = chai.assert;

// First test of function pow.
describe("pow", function() {

  before(() => console.log("Before the test."));
  after(() => console.log("After the test."));

  beforeEach(() => console.log("Before each test."));
  afterEach(() => console.log("After each test."));

  it("Raises 2 to the power of 3.", function() {
    assert.equal(pow(2, 3), 8);
  });

  it("Raises 2 to the power of 4.", function() {
    assert.equal(pow(2, 4), 16);
  });

  it("Raises 3 to the power of 4.", function() {
    assert.equal(pow(3, 4), 81);
  });

  describe("Raises x to the power of n.", function() {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} to the power of 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      })
    }

    for (let i = 1; i <= 10; i++) {
      makeTest(i);
    }
  });

  describe("Cathing errors from non integers and negative integers.", function() {
    it("for negative n result gives NaN.", function() {
      assert.isNaN(pow(2, -1));
    });

    it("for non integers n result gives NaN.", function() {
      assert.isNaN(pow(2, "string"));
    });
  });

});

mocha.run();
