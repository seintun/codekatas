const array = [8, 5, 2, 9, 5, 6, 3];

/**
 * Best: O(n) time O(1) Space
 * Avg: O(n^2) time O(1) Space
 * Worst: O(n^2) time O(1) Space
 */
(function bubbleSort(array) {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    counter++
  }
  console.log(array)
  return array
})(array) // [ 8, 5, 2, 9, 5, 6, 3 ]

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}