const invertBinaryTree = require("./invertBinaryTree");

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }

  invertedInsert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
    }
    this.invertedInsert(values, i + 1);
    return this;
  }
}

const test1 = new BinaryTree(1);
const invertedTest1 = new BinaryTree(1);

const test2 = new BinaryTree(1).insert([2]);
const invertedTest2 = new BinaryTree(1).invertedInsert([2]);

const test3 = new BinaryTree(1).insert([2, 3]);
const invertedTest3 = new BinaryTree(1).invertedInsert([2, 3]);

const test4 = new BinaryTree(1).insert([2, 3, 4]);
const invertedTest4 = new BinaryTree(1).invertedInsert([2, 3, 4]);

const test5 = new BinaryTree(1).insert([2, 3, 4, 5]);
const invertedTest5 = new BinaryTree(1).invertedInsert([2, 3, 4, 5]);

const test6 = new BinaryTree(1).insert([2, 3, 4, 5, 6]);
const invertedTest6 = new BinaryTree(1).invertedInsert([2, 3, 4, 5, 6]);

const test7 = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7]);
const invertedTest7 = new BinaryTree(1).invertedInsert([2, 3, 4, 5, 6, 7]);

const test8 = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8]);
const invertedTest8 = new BinaryTree(1).invertedInsert([2, 3, 4, 5, 6, 7, 8]);

const test9 = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9]);
const invertedTest9 = new BinaryTree(1).invertedInsert([
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9
]);

const test10 = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
const invertedTest10 = new BinaryTree(1).invertedInsert([
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10
]);

const test11 = new BinaryTree(1).insert([
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18
]);
const invertedTest11 = new BinaryTree(1).invertedInsert([
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18
]);

it("Test Case #1", function() {
  invertBinaryTree(test1);
  expect(test1).toEqual(invertedTest1);
});

it("Test Case #2", function() {
  invertBinaryTree(test2);
  expect(test2).toEqual(invertedTest2);
});

it("Test Case #3", function() {
  invertBinaryTree(test3);
  expect(test3).toEqual(invertedTest3);
});

it("Test Case #4", function() {
  invertBinaryTree(test4);
  expect(test4).toEqual(invertedTest4);
});

it("Test Case #5", function() {
  invertBinaryTree(test5);
  expect(test5).toEqual(invertedTest5);
});

it("Test Case #6", function() {
  invertBinaryTree(test6);
  expect(test6).toEqual(invertedTest6);
});

it("Test Case #7", function() {
  invertBinaryTree(test7);
  expect(test7).toEqual(invertedTest7);
});

it("Test Case #8", function() {
  invertBinaryTree(test8);
  expect(test8).toEqual(invertedTest8);
});

it("Test Case #9", function() {
  invertBinaryTree(test9);
  expect(test9).toEqual(invertedTest9);
});

it("Test Case #10", function() {
  invertBinaryTree(test10);
  expect(test10).toEqual(invertedTest10);
});

it("Test Case #11", function() {
  invertBinaryTree(test11);
  expect(test11).toEqual(invertedTest11);
});
