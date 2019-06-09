// Unoptimized ES2015 version
/**
 * Best: O(n) time O(1) Space
 * Avg: O(n^2) time O(1) Space
 * Worst: O(n^2) time O(1) Space
 */
function bubbleSort(array) {
  const swap = (array, idx1, idx2) => {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  };
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

module.exports = bubbleSort;
