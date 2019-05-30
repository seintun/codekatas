function binarySearch(array, target) {
  // Write your code here.
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((right + left) / 2);

  while (left <= right) {
    if (array[mid] === target) return mid;
    if (array[mid] < target) left = mid + 1;
    else if (array[mid] > target) right = mid - 1;
    mid = Math.floor((right + left) / 2);
  }
  return -1;
}

// function binarySearch(array, target) {
//   // Write your code here.
// 	let left = 0;
// 	let right = array.length - 1;
// 	let mid = Math.floor((right+left)/2);
// 	while (array[mid] !== target && left <= right){
// 		if(array[mid] < target) left = mid + 1;
// 		else if(array[mid] > target) right = mid - 1;
// 		mid = Math.floor((right+left)/2);
// 	}
// 	return array[mid] === target ? mid : -1;
// }

// Do not edit the line below.
module.exports = binarySearch;
