const binarySearch = require("./binarySearch");

test("Test Case #1", function() {
  expect(binarySearch([1, 5, 23, 111], 111)).toEqual(3);
});

test("Test Case #2", function() {
  expect(binarySearch([1, 5, 23, 111], 5)).toEqual(1);
});

test("Test Case #3", function() {
  expect(binarySearch([1, 5, 23, 111], 35)).toEqual(-1);
});

test("Test Case #4", function() {
  expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33)).toEqual(3);
});

test("Test Case #5", function() {
  expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 72)).toEqual(8);
});

test("Test Case #6", function() {
  expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 73)).toEqual(9);
});

test("Test Case #7", function() {
  expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 70)).toEqual(-1);
});

test("Test Case #8", function() {
  expect(
    binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355], 355)
  ).toEqual(10);
});

test("Test Case #9", function() {
  expect(
    binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355], 354)
  ).toEqual(-1);
});
