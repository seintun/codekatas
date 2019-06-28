const maxSubsetSumNoAdjacent = require("./maxSubsetSumNoAdjacent");

it("Test Case #1", function() {
  expect(maxSubsetSumNoAdjacent([])).toEqual(0);
});

it("Test Case #2", function() {
  expect(maxSubsetSumNoAdjacent([1])).toEqual(1);
});

it("Test Case #3", function() {
  expect(maxSubsetSumNoAdjacent([1, 2])).toEqual(2);
});

it("Test Case #4", function() {
  expect(maxSubsetSumNoAdjacent([1, 2, 3])).toEqual(4);
});

it("Test Case #5", function() {
  expect(maxSubsetSumNoAdjacent([1, 15, 3])).toEqual(15);
});

it("Test Case #6", function() {
  expect(maxSubsetSumNoAdjacent([7, 10, 12, 7, 9, 14])).toEqual(33);
});

it("Test Case #7", function() {
  expect(maxSubsetSumNoAdjacent([4, 3, 5, 200, 5, 3])).toEqual(207);
});

it("Test Case #8", function() {
  expect(maxSubsetSumNoAdjacent([10, 5, 20, 25, 15, 5, 5, 15])).toEqual(60);
});

it("Test Case #9", function() {
  expect(
    maxSubsetSumNoAdjacent([10, 5, 20, 25, 15, 5, 5, 15, 3, 15, 5, 5, 15])
  ).toEqual(90);
});

it("Test Case #10", function() {
  expect(maxSubsetSumNoAdjacent([125, 210, 250, 120, 150, 300])).toEqual(675);
});

it("Test Case #11", function() {
  expect(maxSubsetSumNoAdjacent([30, 25, 50, 55, 100])).toEqual(180);
});

it("Test Case #12", function() {
  expect(maxSubsetSumNoAdjacent([30, 25, 50, 55, 100, 120])).toEqual(205);
});

it("Test Case #13", function() {
  expect(
    maxSubsetSumNoAdjacent([7, 10, 12, 7, 9, 14, 15, 16, 25, 20, 4])
  ).toEqual(72);
});
