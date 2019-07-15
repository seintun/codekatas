const searchInSortedMatrix = require("./searchInSortedMatrix");

const matrix = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004]
];

it("Test Case #1", function() {
  expect(searchInSortedMatrix(matrix, 1)).toEqual([0, 0]);
});

it("Test Case #2", function() {
  expect(searchInSortedMatrix(matrix, 2)).toEqual([1, 0]);
});

it("Test Case #3", function() {
  expect(searchInSortedMatrix(matrix, 4)).toEqual([0, 1]);
});

it("Test Case #4", function() {
  expect(searchInSortedMatrix(matrix, 15)).toEqual([0, 4]);
});

it("Test Case #5", function() {
  expect(searchInSortedMatrix(matrix, 12)).toEqual([0, 3]);
});

it("Test Case #6", function() {
  expect(searchInSortedMatrix(matrix, 32)).toEqual([1, 4]);
});

it("Test Case #7", function() {
  expect(searchInSortedMatrix(matrix, 99)).toEqual([4, 0]);
});

it("Test Case #8", function() {
  expect(searchInSortedMatrix(matrix, 100)).toEqual([4, 1]);
});

it("Test Case #9", function() {
  expect(searchInSortedMatrix(matrix, 40)).toEqual([3, 0]);
});

it("Test Case #10", function() {
  expect(searchInSortedMatrix(matrix, 128)).toEqual([4, 4]);
});

it("Test Case #11", function() {
  expect(searchInSortedMatrix(matrix, 106)).toEqual([4, 3]);
});

it("Test Case #12", function() {
  expect(searchInSortedMatrix(matrix, 45)).toEqual([3, 4]);
});

it("Test Case #13", function() {
  expect(searchInSortedMatrix(matrix, 24)).toEqual([2, 2]);
});

it("Test Case #14", function() {
  expect(searchInSortedMatrix(matrix, 44)).toEqual([3, 3]);
});

it("Test Case #15", function() {
  expect(searchInSortedMatrix(matrix, 43)).toEqual([-1, -1]);
});

it("Test Case #16", function() {
  expect(searchInSortedMatrix(matrix, -1)).toEqual([-1, -1]);
});

it("Test Case #17", function() {
  expect(searchInSortedMatrix(matrix, 1000)).toEqual([0, 5]);
});

it("Test Case #18", function() {
  expect(searchInSortedMatrix(matrix, 1004)).toEqual([4, 5]);
});
