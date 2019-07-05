const hasSingleCycle = require("./hasSingleCycle");

it("Test Case #1", function() {
  expect(hasSingleCycle([2, 2, -1])).toEqual(true);
});

it("Test Case #2", function() {
  expect(hasSingleCycle([2, 2, 2])).toEqual(true);
});

it("Test Case #3", function() {
  expect(hasSingleCycle([1, 1, 1, 1, 1])).toEqual(true);
});

it("Test Case #4", function() {
  expect(hasSingleCycle([-1, 2, 2])).toEqual(true);
});

it("Test Case #5", function() {
  expect(hasSingleCycle([0, 1, 1, 1, 1])).toEqual(false);
});

it("Test Case #6", function() {
  expect(hasSingleCycle([1, 1, 0, 1, 1])).toEqual(false);
});

it("Test Case #7", function() {
  expect(hasSingleCycle([1, 1, 1, 1, 2])).toEqual(false);
});

it("Test Case #8", function() {
  expect(
    hasSingleCycle([3, 5, 6, -5, -2, -5, -12, -2, -1, 2, -6, 1, 1, 2, -5, 2])
  ).toEqual(true);
});

it("Test Case #9", function() {
  expect(
    hasSingleCycle([3, 5, 5, -5, -2, -5, -12, -2, -1, 2, -6, 1, 1, 2, -5, 2])
  ).toEqual(false);
});

it("Test Case #10", function() {
  expect(hasSingleCycle([1, 2, 3, 4, -2, 3, 7, 8, 1])).toEqual(true);
});

it("Test Case #11", function() {
  expect(hasSingleCycle([1, 2, 3, 4, -2, 3, 7, 8, -8])).toEqual(true);
});

it("Test Case #12", function() {
  expect(hasSingleCycle([1, 2, 3, 4, -2, 3, 7, 8, -26])).toEqual(true);
});

it("Test Case #13", function() {
  expect(hasSingleCycle([10, 11, -6, -23, -2, 3, 88, 908, -26])).toEqual(true);
});

it("Test Case #14", function() {
  expect(hasSingleCycle([10, 11, -6, -23, -2, 3, 88, 909, -26])).toEqual(false);
});

it("Test Case #15", function() {
  expect(hasSingleCycle([2, 3, 1, -4, -4, 2])).toEqual(true);
});
