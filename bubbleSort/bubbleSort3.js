const array = [8, 5, 2, 9, 5, 6, 3];

// Optimized moving pointers inwards
/**
 * Best: O(n) time O(1) Space
 * Avg: O(n^2) time O(1) Space
 * Worst: O(n^2) time O(1) Space
 */
(function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  console.log(arr)
  return arr
})(array) // [ 8, 5, 2, 9, 5, 6, 3 ]

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}