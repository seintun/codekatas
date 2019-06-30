const numberOfWaysToMakeChange = require("./numberOfWaysToMakeChange");

it("Test Case #1", function() {
  expect(numberOfWaysToMakeChange(0, [2, 3, 4, 7])).toEqual(1);
});

it("Test Case #2", function() {
  expect(numberOfWaysToMakeChange(9, [5])).toEqual(0);
});

it("Test Case #3", function() {
  expect(numberOfWaysToMakeChange(7, [2, 4])).toEqual(0);
});

it("Test Case #4", function() {
  expect(numberOfWaysToMakeChange(6, [1, 5])).toEqual(2);
});

it("Test Case #5", function() {
  expect(numberOfWaysToMakeChange(4, [1, 5, 10, 25])).toEqual(1);
});

it("Test Case #6", function() {
  expect(numberOfWaysToMakeChange(5, [1, 5, 10, 25])).toEqual(2);
});

it("Test Case #7", function() {
  expect(numberOfWaysToMakeChange(10, [1, 5, 10, 25])).toEqual(4);
});

it("Test Case #8", function() {
  expect(numberOfWaysToMakeChange(25, [1, 5, 10, 25])).toEqual(13);
});

it("Test Case #9", function() {
  expect(numberOfWaysToMakeChange(12, [2, 3, 7])).toEqual(4);
});

it("Test Case #10", function() {
  expect(numberOfWaysToMakeChange(7, [2, 3, 4, 7])).toEqual(3);
});
