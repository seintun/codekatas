/**
Min Number Of Coins For Change
Given an array of positive integers representing coin denominations and a single non-negative integer
representing a target amount of money, implement a function that returns the smallest number of coins
needed to make change for that target amount using the given coin denominations. Note that an
unlimited amount of coins is at your disposal. If it is impossible to make change for the target amount,
return -1.
Sample input: 7, [1, 5, 10]
Sample output: 3 (2x1 + 1x5)
 */

function minNumberOfCoinsForChange(n, denoms) {
  // Write your code here.
  const numOfCoins = (new Array(n + 1).fill(Infinity))
  numOfCoins[0] = 0;
  for (const denom of denoms) {
    for (let amount = 0; amount < numOfCoins.length; amount++) {
      if (denom <= amount) {
        numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1)
      }
    }
  }
  const result = numOfCoins[n] !== Infinity ? numOfCoins[n] : -1
  console.log(result)
  return result;
}



minNumberOfCoinsForChange(7, [1, 5, 10]) // 3 coins [$1x2, $5x1]
minNumberOfCoinsForChange(0, [1, 2, 3]) // 0 coin
minNumberOfCoinsForChange(3, [2, 1]) // 2 coins [$2x1, $1x1]