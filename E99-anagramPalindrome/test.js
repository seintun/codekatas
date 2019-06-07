const anagramPalindrome = require("./anagramPalindrome");

it("Test Case #1", function() {
  const input = "a";
  const output = true;
  expect(anagramPalindrome(input)).toEqual(output);
});

it("Test Case #2", function() {
  const input = "a";
  const output = true;
  expect(anagramPalindrome(input)).toEqual(output);
});

it("Test Case #3", function() {
  const input = "";
  const output = true;
  expect(anagramPalindrome(input)).toEqual(output);
});

it("Test Case #4", function() {
  const input = "ab";
  const output = false;
  expect(anagramPalindrome(input)).toEqual(output);
});

it("Test Case #5", function() {
  const input = "abab";
  const output = true;
  expect(anagramPalindrome(input)).toEqual(output);
});

it("Test Case #6", function() {
  const input = "abbbaa";
  const output = false;
  expect(anagramPalindrome(input)).toEqual(output);
});

it("Test Case #7", function() {
  const input = "racecar";
  const output = true;
  expect(anagramPalindrome(input)).toEqual(output);
});

it("Test Case #8", function() {
  const input = "failedinput";
  const output = false;
  expect(anagramPalindrome(input)).toEqual(output);
});

it("Test Case #9", function() {
  const input = "xyzxyz";
  const output = true;
  expect(anagramPalindrome(input)).toEqual(output);
});

it("Test Case #10", function() {
  const input = "palinana";
  const output = false;
  expect(anagramPalindrome(input)).toEqual(output);
});
