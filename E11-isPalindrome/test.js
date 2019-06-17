const isPalindrome = require("./isPalindrome");

it("Test Case #1", function() {
  expect(isPalindrome("a")).toEqual(true);
});

it("Test Case #2", function() {
  expect(isPalindrome("ab")).toEqual(false);
});

it("Test Case #3", function() {
  expect(isPalindrome("aba")).toEqual(true);
});

it("Test Case #4", function() {
  expect(isPalindrome("abb")).toEqual(false);
});

it("Test Case #5", function() {
  expect(isPalindrome("abba")).toEqual(true);
});

it("Test Case #6", function() {
  expect(isPalindrome("abcdcba")).toEqual(true);
});

it("Test Case #7", function() {
  expect(isPalindrome("abcdefghhgfedcba")).toEqual(true);
});

it("Test Case #8", function() {
  expect(isPalindrome("abcdefghihgfedcba")).toEqual(true);
});

it("Test Case #9", function() {
  expect(isPalindrome("abcdefghihgfeddcba")).toEqual(false);
});
