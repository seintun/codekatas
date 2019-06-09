const findThreeLargestNumbers = require("./findThreeLargestNumbers");

it("Test Case #1", function() {
  expect(findThreeLargestNumbers([55, 7, 8])).toEqual([7, 8, 55]);
});

it("Test Case #2", function() {
  expect(findThreeLargestNumbers([55, 43, 11, 3, -3, 10])).toEqual([
    11,
    43,
    55
  ]);
});

it("Test Case #3", function() {
  expect(findThreeLargestNumbers([7, 8, 3, 11, 43, 55])).toEqual([11, 43, 55]);
});

it("Test Case #4", function() {
  expect(findThreeLargestNumbers([55, 7, 8, 3, 43, 11])).toEqual([11, 43, 55]);
});

it("Test Case #5", function() {
  expect(findThreeLargestNumbers([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7])).toEqual([
    7,
    7,
    7
  ]);
});

it("Test Case #6", function() {
  expect(findThreeLargestNumbers([7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7])).toEqual([
    7,
    7,
    8
  ]);
});

it("Test Case #7", function() {
  expect(
    findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
  ).toEqual([18, 141, 541]);
});

it("Test Case #8", function() {
  expect(
    findThreeLargestNumbers([-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7])
  ).toEqual([-2, -1, 7]);
});
