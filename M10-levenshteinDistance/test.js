const levenshteinDistance = require("./levenshteinDistance");

it("Test Case #1", function() {
  expect(levenshteinDistance("", "")).toEqual(0);
});

it("Test Case #2", function() {
  expect(levenshteinDistance("", "abc")).toEqual(3);
});

it("Test Case #3", function() {
  expect(levenshteinDistance("abc", "abc")).toEqual(0);
});

it("Test Case #4", function() {
  expect(levenshteinDistance("abc", "abx")).toEqual(1);
});

it("Test Case #5", function() {
  expect(levenshteinDistance("abc", "abcx")).toEqual(1);
});

it("Test Case #6", function() {
  expect(levenshteinDistance("abc", "yabcx")).toEqual(2);
});

it("Test Case #7", function() {
  expect(levenshteinDistance("algoexpert", "algozexpert")).toEqual(1);
});

it("Test Case #8", function() {
  expect(levenshteinDistance("abcdefghij", "1234567890")).toEqual(10);
});

it("Test Case #9", function() {
  expect(levenshteinDistance("abcdefghij", "a234567890")).toEqual(9);
});

it("Test Case #10", function() {
  expect(levenshteinDistance("biting", "mitten")).toEqual(4);
});

it("Test Case #11", function() {
  expect(levenshteinDistance("cereal", "saturday")).toEqual(6);
});

it("Test Case #12", function() {
  expect(levenshteinDistance("cereal", "saturdzz")).toEqual(7);
});

it("Test Case #13", function() {
  expect(levenshteinDistance("abbbbbbbbb", "bbbbbbbbba")).toEqual(2);
});

it("Test Case #14", function() {
  expect(levenshteinDistance("abc", "yabd")).toEqual(2);
});

it("Test Case #15", function() {
  expect(levenshteinDistance("xabc", "abcx")).toEqual(2);
});
