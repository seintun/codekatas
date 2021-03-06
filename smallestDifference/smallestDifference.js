/**
 * Write a function that takes in two non-empty integers. The function should find the pair of numbers (one from the first array, one from the secon array) whose absolute difference is closest to zero. The function should return an array containing these two numbers, with the number from the first array in the first position. Assume that there will be only on pair of numbers with the smallest difference.
 */

// input:[-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]
// output: [28, 26]

// input:[10, 0 20, 25], [1005, 1006, 1014, 1032, 1031]
// output: [25, 1005]

const arr1 = [-1, 5, 10, 20, 28, 3]
const arr2 = [26, 134, 135, 15, 17]
// O(nlog(n) + mlog(m)) Time and O(1) Space
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)
  let idxOne = 0,
  idxTwo = 0,
  smallest = Infinity,
  current = Infinity,
  smallestPair = [];
  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = 0,
    secondNum = 0;
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      idxOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      idxTwo++;
    } else return [firstNum, secondNum];
    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  console.log(smallestPair);
  return smallestPair;
}
smallestDifference(arr1, arr2);