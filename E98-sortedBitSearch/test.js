const sortedBitSearch = require("./sortedBitSearch");

it("Test Case #1", function() {
  const input = [0, 0, 1, 1, 1, 1, 1, 1, 1];
  const output = 7;
  expect(sortedBitSearch(input)).toEqual(output);
});

it("Test Case #2", function() {
  const input = [0, 1, 1, 1, 1];
  const output = 4;
  expect(sortedBitSearch(input)).toEqual(output);
});

it("Test Case #3", function() {
  const input = [0, 0, 1, 1];
  const output = 2;
  expect(sortedBitSearch(input)).toEqual(output);
});

it("Test Case #4", function() {
  const input = [0, 0, 0, 0, 1, 1, 1];
  const output = 3;
  expect(sortedBitSearch(input)).toEqual(output);
});

it("Test Case #5", function() {
  const input = [0, 1, 1, 1, 1, 1, 1, 1, 1];
  const output = 8;
  expect(sortedBitSearch(input)).toEqual(output);
});

it("Test Case #6", function() {
  const input = [0];
  const output = 0;
  expect(sortedBitSearch(input)).toEqual(output);
});

it("Test Case #7", function() {
  const input = [1, 1, 1, 1, 1, 1, 1];
  const output = 7;
  expect(sortedBitSearch(input)).toEqual(output);
});
