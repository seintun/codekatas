const getPermutations = require("./getPermutations");

it("Test Case #1", function() {
  const perms = getPermutations([]);
  expect(perms.length).toEqual(0);
});

it("Test Case #2", function() {
  const perms = getPermutations([1]);
  expect(perms.length).toEqual(1);
  expect(perms).to.deep.include([1]);
});

it("Test Case #3", function() {
  const perms = getPermutations([1, 2]);
  expect(perms.length).toEqual(2);
  expect(perms).to.deep.include([1, 2]);
  expect(perms).to.deep.include([2, 1]);
});

it("Test Case #4", function() {
  const perms = getPermutations([1, 2, 3]);
  expect(perms.length).toEqual(6);
  expect(perms).to.deep.include([1, 2, 3]);
  expect(perms).to.deep.include([1, 3, 2]);
  expect(perms).to.deep.include([2, 1, 3]);
  expect(perms).to.deep.include([2, 3, 1]);
  expect(perms).to.deep.include([3, 1, 2]);
  expect(perms).to.deep.include([3, 2, 1]);
});

it("Test Case #5", function() {
  const perms = getPermutations([1, 2, 3, 4]);
  expect(perms.length).toEqual(24);
  expect(perms).to.deep.include([1, 2, 3, 4]);
  expect(perms).to.deep.include([1, 2, 4, 3]);
  expect(perms).to.deep.include([1, 3, 2, 4]);
  expect(perms).to.deep.include([1, 3, 4, 2]);
  expect(perms).to.deep.include([1, 4, 3, 2]);
  expect(perms).to.deep.include([1, 4, 2, 3]);
  expect(perms).to.deep.include([2, 1, 3, 4]);
  expect(perms).to.deep.include([2, 1, 4, 3]);
  expect(perms).to.deep.include([2, 3, 1, 4]);
  expect(perms).to.deep.include([2, 3, 4, 1]);
  expect(perms).to.deep.include([2, 4, 1, 3]);
  expect(perms).to.deep.include([2, 4, 3, 1]);
  expect(perms).to.deep.include([3, 1, 2, 4]);
  expect(perms).to.deep.include([3, 1, 4, 2]);
  expect(perms).to.deep.include([3, 2, 1, 4]);
  expect(perms).to.deep.include([3, 2, 4, 1]);
  expect(perms).to.deep.include([3, 4, 1, 2]);
  expect(perms).to.deep.include([3, 4, 2, 1]);
  expect(perms).to.deep.include([4, 1, 2, 3]);
  expect(perms).to.deep.include([4, 1, 3, 2]);
  expect(perms).to.deep.include([4, 2, 1, 3]);
  expect(perms).to.deep.include([4, 2, 3, 1]);
  expect(perms).to.deep.include([4, 3, 1, 2]);
  expect(perms).to.deep.include([4, 3, 2, 1]);
});
