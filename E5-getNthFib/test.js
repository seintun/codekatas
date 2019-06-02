const getNthFib = require("./getNthFib");

it("Test Case #1", function() {
  expect(getNthFib(1)).toEqual(0);
});

it("Test Case #2", function() {
  expect(getNthFib(2)).toEqual(1);
});

it("Test Case #3", function() {
  expect(getNthFib(3)).toEqual(1);
});

it("Test Case #4", function() {
  expect(getNthFib(4)).toEqual(2);
});

it("Test Case #5", function() {
  expect(getNthFib(5)).toEqual(3);
});

it("Test Case #6", function() {
  expect(getNthFib(6)).toEqual(5);
});

it("Test Case #7", function() {
  expect(getNthFib(7)).toEqual(8);
});

it("Test Case #8", function() {
  expect(getNthFib(8)).toEqual(13);
});

it("Test Case #9", function() {
  expect(getNthFib(9)).toEqual(21);
});

it("Test Case #10", function() {
  expect(getNthFib(10)).toEqual(34);
});

it("Test Case #11", function() {
  expect(getNthFib(11)).toEqual(55);
});

it("Test Case #12", function() {
  expect(getNthFib(12)).toEqual(89);
});
