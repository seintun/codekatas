/**
 * 
Write a function:
function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.
Given A = [−1, −3], the function should return 1.
Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
 * 
 */

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let m = Math.max(...A);
  if (m < 1) return 1;
  if (A.length === 1) return A[0] === 1 ? 2 : 1;

  let i = 0;
  const l = [m];
  for (let i = 0; A.length; i++) {
    if (A[i] > 0) {
      if (l[A[i] - 1] !== 1) l[A[i] - 1] = 1;
    }
  }
  for (let i = 0; l.length; i++) {
    if (l[i] === 0) return i + 1;
  }
  console.log(i + 2);
  return i + 2;
}

const test = [1, 3, 6, 4, 1, 2];
solution(test);

// Example test:    [1, 3, 6, 4, 1, 2] // expected 5

// Example test:    [1, 2, 3] // expected 4

// Example test:    [-1, -3] // expected 1
