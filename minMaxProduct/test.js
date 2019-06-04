const minMaxProduct = require("./minMaxProduct");

it("Test Case #1", function() {
  const operations = ["push", "push", "push", "pop"];
  const intArray = [1, 2, 3, 1];
  expect(minMaxProduct(operations, intArray)).toEqual([1, 2, 3, 6]);
});

it("Test Case #2", function() {
  const operations = ["push", "push"];
  const intArray = [3, 2];
  expect(minMaxProduct(operations, intArray)).toEqual([9, 6]);
});

it("Test Case #3", function() {
  const operations = ["push"];
  const intArray = [4];
  expect(minMaxProduct(operations, intArray)).toEqual([16]);
});

it("Test Case #4", function() {
  const operations = [
    "push",
    "push",
    "push",
    "pop",
    "push",
    "pop",
    "push",
    "push"
  ];
  const intArray = [1, 2, 3, 1, 3, 2, 4, 2];
  expect(minMaxProduct(operations, intArray)).toEqual([
    1,
    2,
    3,
    6,
    6,
    9,
    12,
    8
  ]);
});

it("Test Case #5", function() {
  const operations = ["pop"];
  const intArray = [99];
  expect(minMaxProduct(operations, intArray)).toEqual([]);
});
