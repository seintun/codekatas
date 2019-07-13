const removeKthNodeFromEnd = require("./removeKthNodeFromEnd");

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  addMany(values) {
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    for (const value of values) {
      current.next = new LinkedList(value);
      current = current.next;
    }
    return this;
  }

  getNodesInArray() {
    const nodes = [];
    let current = this;
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }
}

const test1 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const result1 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8]);

const test2 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const result2 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 9]);

const test3 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const result3 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 8, 9]);

const test4 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const result4 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 7, 8, 9]);

const test5 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const result5 = new LinkedList(0).addMany([1, 2, 3, 4, 6, 7, 8, 9]);

const test6 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const result6 = new LinkedList(0).addMany([1, 2, 3, 5, 6, 7, 8, 9]);

const test7 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const result7 = new LinkedList(0).addMany([1, 2, 4, 5, 6, 7, 8, 9]);

const test8 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const result8 = new LinkedList(0).addMany([1, 3, 4, 5, 6, 7, 8, 9]);

const test9 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const result9 = new LinkedList(0).addMany([2, 3, 4, 5, 6, 7, 8, 9]);

const test10 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const result10 = new LinkedList(1).addMany([2, 3, 4, 5, 6, 7, 8, 9]);

it("Test Case #1", function() {
  removeKthNodeFromEnd(test1, 1);
  expect(test1.getNodesInArray()).toEqual(result1.getNodesInArray());
});

it("Test Case #2", function() {
  removeKthNodeFromEnd(test2, 2);
  expect(test2.getNodesInArray()).toEqual(result2.getNodesInArray());
});

it("Test Case #3", function() {
  removeKthNodeFromEnd(test3, 3);
  expect(test3.getNodesInArray()).toEqual(result3.getNodesInArray());
});

it("Test Case #4", function() {
  removeKthNodeFromEnd(test4, 4);
  expect(test4.getNodesInArray()).toEqual(result4.getNodesInArray());
});

it("Test Case #5", function() {
  removeKthNodeFromEnd(test5, 5);
  expect(test5.getNodesInArray()).toEqual(result5.getNodesInArray());
});

it("Test Case #6", function() {
  removeKthNodeFromEnd(test6, 6);
  expect(test6.getNodesInArray()).toEqual(result6.getNodesInArray());
});

it("Test Case #7", function() {
  removeKthNodeFromEnd(test7, 7);
  expect(test7.getNodesInArray()).toEqual(result7.getNodesInArray());
});

it("Test Case #8", function() {
  removeKthNodeFromEnd(test8, 8);
  expect(test8.getNodesInArray()).toEqual(result8.getNodesInArray());
});

it("Test Case #9", function() {
  removeKthNodeFromEnd(test9, 9);
  expect(test9.getNodesInArray()).toEqual(result9.getNodesInArray());
});

it("Test Case #10", function() {
  removeKthNodeFromEnd(test10, 10);
  expect(test10.getNodesInArray()).toEqual(result10.getNodesInArray());
});
