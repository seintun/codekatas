/*
 * sortedBitSearch
 *
 * Write a function which accepts an array of 0's and 1's sorted in ascending order
 * and returns the number of 1's in the array.
 *
 * input = [0, 0, 0, 0, 1, 1, 1];
 * output = 3;
 */

function sortedBitSearch(bitArr) {
  // your code here
  let leftIdx = 0;
  let rightIdx = bitArr.length - 1;
  let midIdx = Math.floor(rightIdx - leftIdx / 2);

  if (bitArr[bitArr.length - 1] === 0) return 0;
  if (bitArr[0] === 1) return bitArr.length;

  while (true) {
    if (bitArr[midIdx] === 1) {
      if (bitArr[midIdx - 1] === 1) {
        rightIdx = midIdx - 1;
        midIdx = Math.floor(rightIdx - leftIdx / 2);
      } else return bitArr.length - midIdx;
    } else leftIdx = midIdx + 1;
  }
}

module.exports = sortedBitSearch;
