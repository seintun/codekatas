/**
Min Heap Construction
Implement a Min Heap class. The class should support insertion, removal (of the minimum / root value), peeking (of the minimum / root value, as well as sifting a value up and down the heap and building the heap from an input array. The heap should be represented in the form of an array.

Sample input: [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]
-> buildHeap(array)
-> insert(76)
-> remove()
-> remove()
-> insert(87)
Sample output:
-> [-5, 2, 6, 7, 8, 8, 24, 391, 24, 56, 12, 24, 48, 41]
-> [-5, 2, 6, 7, 8, 8, 24, 391, 24, 56, 12, 24, 48, 41, 76]
-> [2, 7, 6, 24, 8, 8, 24, 391, 76, 56, 12, 24, 48, 41]
-> [6, 7, 8, 24, 8, 24, 24, 391, 76, 56, 12, 41, 48]
-> [6, 7, 8, 24, 8, 24, 24, 391, 76, 56, 12, 41, 48, 87]
 */

// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    // Write your code here.
  }

  siftDown() {
    // Write your code here.
  }

  siftUp() {
    // Write your code here.
  }

  peek() {
    // Write your code here.
  }

  remove() {
    // Write your code here.
  }

  insert(value) {
    // Write your code here.
  }
}

// Do not edit the line below.
module.exports = MinHeap;
