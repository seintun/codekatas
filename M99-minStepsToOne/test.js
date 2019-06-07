const minStepsToOne = require("./minStepsToOne");

it("Test Case #1", function() {
  const input = 1;
  const output = 0;
  expect(minStepsToOne(input)).toEqual(output);
});

it("Test Case #2", function() {
  const input = 5;
  const output = 3;
  expect(minStepsToOne(input)).toEqual(output);
});

it("Test Case #3", function() {
  const input = 11;
  const output = 4;
  expect(minStepsToOne(input)).toEqual(output);
});

it("Test Case #4", function() {
  const input = 37;
  const output = 5;
  expect(minStepsToOne(input)).toEqual(output);
});

it("Test Case #5", function() {
  const input = 405;
  const output = 7;
  expect(minStepsToOne(input)).toEqual(output);
});

// Runtime test
xit("Test Case #6", function() {
  const input = 5678;
  const output = 14;
  expect(minStepsToOne(input)).toEqual(output);
});

xit("Test Case #7", function() {
  const input = 9955;
  const output = 14;
  expect(minStepsToOne(input)).toEqual(output);
});

xit("Test Case #8", function() {
  const input = 1000000;
  const output = 19;
  expect(minStepsToOne(input)).toEqual(output);
});

xit("Test Case #9", function() {
  const input = 1234567;
  const output = 21;
  expect(minStepsToOne(input)).toEqual(output);
});

xit("Test Case #10", function() {
  const input = 10000000;
  const output = 22;
  expect(minStepsToOne(input)).toEqual(output);
});
