const findClosestValueInBst = require("./findClosestValueInBst");

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

const test = new BST(100)
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
  .insert(203)
  .insert(-51)
  .insert(-403)
  .insert(1001)
  .insert(57)
  .insert(60)
  .insert(4500);

it("Test Case #1", function() {
  expect(findClosestValueInBst(test, 100)).toEqual(100);
});

it("Test Case #2", function() {
  expect(findClosestValueInBst(test, 208)).toEqual(208);
});

it("Test Case #3", function() {
  expect(findClosestValueInBst(test, 4500)).toEqual(4500);
});

it("Test Case #4", function() {
  expect(findClosestValueInBst(test, 4501)).toEqual(4500);
});

it("Test Case #5", function() {
  expect(findClosestValueInBst(test, -70)).toEqual(-51);
});

it("Test Case #6", function() {
  expect(findClosestValueInBst(test, 2000)).toEqual(1001);
});

it("Test Case #7", function() {
  expect(findClosestValueInBst(test, 6)).toEqual(5);
});

it("Test Case #8", function() {
  expect(findClosestValueInBst(test, 30000)).toEqual(55000);
});

it("Test Case #9", function() {
  expect(findClosestValueInBst(test, -1)).toEqual(1);
});

it("Test Case #10", function() {
  expect(findClosestValueInBst(test, 29751)).toEqual(55000);
});

it("Test Case #11", function() {
  expect(findClosestValueInBst(test, 29749)).toEqual(4500);
});
