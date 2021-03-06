const threeNumberSum = require("./threeNumberSum");

it("Test Case #1", function() {
  expect(threeNumberSum([1, 2, 3], 6)).toEqual([[1, 2, 3]]);
});

it("Test Case #2", function() {
  expect(threeNumberSum([1, 2, 3], 7)).toEqual([]);
});

it("Test Case #3", function() {
  expect(threeNumberSum([8, 10, -2, 49, 14], 57)).toEqual([[-2, 10, 49]]);
});

it("Test Case #4", function() {
  expect(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)).toEqual([
    [-8, 2, 6],
    [-8, 3, 5],
    [-6, 1, 5]
  ]);
});

it("Test Case #5", function() {
  expect(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1], 0)).toEqual([
    [-8, 3, 5],
    [-6, 1, 5],
    [-1, 0, 1]
  ]);
});

it("Test Case #6", function() {
  expect(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6], 0)).toEqual([
    [-8, 2, 6],
    [-8, 3, 5],
    [-6, 0, 6],
    [-6, 1, 5],
    [-1, 0, 1]
  ]);
});

it("Test Case #7", function() {
  expect(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5], 0)).toEqual([
    [-8, 2, 6],
    [-8, 3, 5],
    [-6, 0, 6],
    [-6, 1, 5],
    [-5, -1, 6],
    [-5, 0, 5],
    [-5, 2, 3],
    [-1, 0, 1]
  ]);
});

it("Test Case #8", function() {
  expect(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18)).toEqual([
    [1, 2, 15],
    [1, 8, 9],
    [2, 7, 9],
    [3, 6, 9],
    [3, 7, 8],
    [4, 5, 9],
    [4, 6, 8],
    [5, 6, 7]
  ]);
});

it("Test Case #9", function() {
  expect(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 32)).toEqual([
    [8, 9, 15]
  ]);
});

it("Test Case #10", function() {
  expect(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 33)).toEqual([]);
});

it("Test Case #11", function() {
  expect(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 5)).toEqual([]);
});
