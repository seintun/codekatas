// Product of the Maximum and Minimum in a Dataset
/**
 * We start with an empty set of integers named elements. We want to perform the following query operations:
 * - The command 'push' x inserts the value of x into elements
 * - The command 'pop' x removes the value of x from elements
 * (Function Description)
 * Complete the function maxMin in the editor below. The function must return an array of long integers denoting the product of the maximum and minimum of elements after each query.
 *
 * maxMin has the following paramenter(s):
 * - operations[operations[0],..,operations[n-1]]: an array of operations strings
 * - x[x[0],..,x[n-1]]: an array of x values that go with operations where x[i] goes with operations[i]
 *
 * Constraints
 * - x <= n <= 10^5
 * - x <= x[i] <= 10^9
 * - It is guranteed that each operations[i] is either push or pop
 * - It is guranteed that any value will exist in the array
 *
 * Sample Input:
 *  operations = ["push", "push", "push", "pop"]
 *  intArray = [1, 2, 3, 1];
 * Sample Output: [1, 2, 3, 6])
 */

function minMaxProduct(operations, x) {
  // Write your code here
}

module.exports = minMaxProduct;
