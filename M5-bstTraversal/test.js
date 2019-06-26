const {
  inOrderTraverse,
  preOrderTraverse,
  postOrderTraverse
} = require("./bstTraversal");

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }
}

const test1 = new BST(10).insert(5).insert(15);

const test2 = new BST(10)
  .insert(5)
  .insert(15)
  .insert(5)
  .insert(2)
  .insert(1)
  .insert(22);

const test3 = new BST(100)
  .insert(5)
  .insert(15)
  .insert(5)
  .insert(2)
  .insert(1)
  .insert(22)
  .insert(1)
  .insert(1)
  .insert(3)
  .insert(1)
  .insert(1)
  .insert(502)
  .insert(55000)
  .insert(204)
  .insert(205)
  .insert(207)
  .insert(206)
  .insert(208)
  .insert(203);

it("Test Case #1", function() {
  expect(inOrderTraverse(test1, [])).toEqual([5, 10, 15]);
});

it("Test Case #2", function() {
  expect(inOrderTraverse(test2, [])).toEqual([1, 2, 5, 5, 10, 15, 22]);
});

it("Test Case #3", function() {
  expect(inOrderTraverse(test3, [])).toEqual([
    1,
    1,
    1,
    1,
    1,
    2,
    3,
    5,
    5,
    15,
    22,
    100,
    203,
    204,
    205,
    206,
    207,
    208,
    502,
    55000
  ]);
});

it("Test Case #4", function() {
  expect(preOrderTraverse(test1, [])).toEqual([10, 5, 15]);
});

it("Test Case #5", function() {
  expect(preOrderTraverse(test2, [])).toEqual([10, 5, 2, 1, 5, 15, 22]);
});

it("Test Case #6", function() {
  expect(preOrderTraverse(test3, [])).toEqual([
    100,
    5,
    2,
    1,
    1,
    1,
    1,
    1,
    3,
    15,
    5,
    22,
    502,
    204,
    203,
    205,
    207,
    206,
    208,
    55000
  ]);
});

it("Test Case #7", function() {
  expect(postOrderTraverse(test1, [])).toEqual([5, 15, 10]);
});

it("Test Case #8", function() {
  expect(postOrderTraverse(test2, [])).toEqual([1, 2, 5, 5, 22, 15, 10]);
});

it("Test Case #9", function() {
  expect(postOrderTraverse(test3, [])).toEqual([
    1,
    1,
    1,
    1,
    1,
    3,
    2,
    5,
    22,
    15,
    5,
    203,
    206,
    208,
    207,
    205,
    204,
    55000,
    502,
    100
  ]);
});
