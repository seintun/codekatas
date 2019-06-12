/**
 * Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numvers in the input array sum up to the target sum, the function should return them an array in sorted order. If no two numbers sum up to the target sum, theh function should return an empty array. Assume that there will be at most one pair ofs numbers summing up to the target sum.
 *
 * Sample input: [3, 5, -4, 8, 11, 1, -1, 6], 10
 * Sample output: [-1, 11]
 */

/*
  I/O Constraint
  ---
  Unsorted array including +/- integers
  input first arg: int[], second arg: int
  output int[]: first & second element adds to target

  Diagramming
  ---
  [0, 1, 2, 3, 4, 5] for 5 // Iterate through array
  ^
  {} // create empty dict
  { // register non-exist in dict
    0: true,
    1: true,
    ...
  }
  (2+3) = target 5
  (5+0) = target 5
  (-1+6) = target 5

  Psuedocode
  ---
  Create dict {}
  Iterate through array
    if the difference of target - current value in dict
      return [target-currentValue, currentValue]
    else current value NOT in dict,
      register key:value of (value:true)
*/

function twoNumberSum(array, targetSum) {
  // Write your code here.
  const dict = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in dict)
      return [potentialMatch, num].sort((a, b) => a - b);
    else dict[num] = true;
  }
  return [];
}

// Do not edit the line below.
module.exports = twoNumberSum;
