const minNumberOfCoinsForChange = require("./minNumberOfCoinsForChange");

it("Test Case #1", function() {
  expect(minNumberOfCoinsForChange(0, [1, 2, 3])).toEqual(0);
});

it("Test Case #2", function() {
  expect(minNumberOfCoinsForChange(3, [2, 1])).toEqual(2);
});

it("Test Case #3", function() {
  expect(minNumberOfCoinsForChange(4, [1, 5, 10])).toEqual(4);
});

it("Test Case #4", function() {
  expect(minNumberOfCoinsForChange(7, [1, 5, 10])).toEqual(3);
});

it("Test Case #5", function() {
  expect(minNumberOfCoinsForChange(10, [1, 5, 10])).toEqual(1);
});

it("Test Case #6", function() {
  expect(minNumberOfCoinsForChange(11, [1, 5, 10])).toEqual(2);
});

it("Test Case #7", function() {
  expect(minNumberOfCoinsForChange(24, [1, 5, 10])).toEqual(6);
});

it("Test Case #8", function() {
  expect(minNumberOfCoinsForChange(25, [1, 5, 10])).toEqual(3);
});

it("Test Case #9", function() {
  expect(minNumberOfCoinsForChange(7, [2, 4])).toEqual(-1);
});

it("Test Case #10", function() {
  expect(minNumberOfCoinsForChange(7, [3, 7])).toEqual(1);
});

it("Test Case #11", function() {
  expect(minNumberOfCoinsForChange(9, [3, 5])).toEqual(3);
});

it("Test Case #12", function() {
  expect(minNumberOfCoinsForChange(9, [3, 4, 5])).toEqual(2);
});

it("Test Case #13", function() {
  expect(minNumberOfCoinsForChange(135, [39, 45, 130, 40, 4, 1])).toEqual(3);
});

it("Test Case #14", function() {
  expect(
    minNumberOfCoinsForChange(135, [39, 45, 130, 40, 4, 1, 60, 75])
  ).toEqual(2);
});
