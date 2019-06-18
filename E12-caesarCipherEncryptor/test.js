const caesarCipherEncryptor = require("./caesarCipherEncryptor");

it("Test Case #1", function() {
  expect(caesarCipherEncryptor("abc", 0)).toEqual("abc");
});

it("Test Case #2", function() {
  expect(caesarCipherEncryptor("abc", 3)).toEqual("def");
});

it("Test Case #3", function() {
  expect(caesarCipherEncryptor("xyz", 2)).toEqual("zab");
});

it("Test Case #4", function() {
  expect(caesarCipherEncryptor("xyz", 5)).toEqual("cde");
});

it("Test Case #5", function() {
  expect(caesarCipherEncryptor("abc", 26)).toEqual("abc");
});

it("Test Case #6", function() {
  expect(caesarCipherEncryptor("abc", 52)).toEqual("abc");
});

it("Test Case #7", function() {
  expect(caesarCipherEncryptor("abc", 57)).toEqual("fgh");
});

it("Test Case #8", function() {
  expect(caesarCipherEncryptor("applepeachstrawberry", 7)).toEqual(
    "hwwslwlhjozayhdilyyf"
  );
});
