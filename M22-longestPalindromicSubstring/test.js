const longestPalindromicSubstring = require("./longestPalindromicSubstring");

it('Test Case #1', function() {
  expect(longestPalindromicSubstring("a")).toEqual("a");
});

it('Test Case #2', function() {
  expect(longestPalindromicSubstring("it's highnoon")).toEqual("noon");
});

it('Test Case #3', function() {
  expect(longestPalindromicSubstring("noon high it is")).toEqual("noon");
});

it('Test Case #4', function() {
  expect(longestPalindromicSubstring("abccbait's highnoon")).toEqual("abccba");
});

it('Test Case #5', function() {
  expect(longestPalindromicSubstring("abaxyzzyxf")).toEqual("xyzzyx");
});

it('Test Case #6', function() {
  expect(longestPalindromicSubstring("abcdefgfedcbazzzzzzzzzzzzzzzzzzzz")).toEqual("zzzzzzzzzzzzzzzzzzzz");
});

it('Test Case #7', function() {
  expect(longestPalindromicSubstring("abcdefgfedcba")).toEqual("abcdefgfedcba");
});

it('Test Case #8', function() {
  expect(longestPalindromicSubstring("abcdefghfedcbaa")).toEqual("aa");
});

it('Test Case #9', function() {
  expect(longestPalindromicSubstring("abcdefggfedcba")).toEqual("abcdefggfedcba");
});

it('Test Case #10', function() {
  expect(longestPalindromicSubstring("zzzzzzz2345abbbba5432zzbbababa")).toEqual("zz2345abbbba5432zz");
});

it('Test Case #11', function() {
  expect(longestPalindromicSubstring("z234a5abbbba54a32z")).toEqual("5abbbba5");
});

it('Test Case #12', function() {
  expect(longestPalindromicSubstring("z234a5abbba54a32z")).toEqual("5abbba5");
});