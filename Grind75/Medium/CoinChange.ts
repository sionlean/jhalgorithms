// https://leetcode.com/problems/coin-change/

const coinChangeUsingArray = (coins: number[], amount: number): number => {
  const maxAmountArr = new Array(amount + 1).fill(Infinity);
  maxAmountArr[0] = 0;

  coins.forEach((coin) => {
    for (let i = coin; i <= amount; i++) {
      maxAmountArr[i] = Math.min(maxAmountArr[i], maxAmountArr[i - coin] + 1);
    }
  });

  return maxAmountArr[amount] === Infinity ? -1 : maxAmountArr[amount];
};

const coinChangeUsingObject = (coins: number[], amount: number): number => {
  const maxAmountArr: { [number: number]: number } = {};
  maxAmountArr[0] = 0;

  coins.forEach((coin) => {
    for (let i = coin; i <= amount; i++) {
      if (maxAmountArr[i - coin] !== undefined) {
        maxAmountArr[i] = Math.min(
          maxAmountArr[i] || Infinity,
          maxAmountArr[i - coin] + 1
        );
      }
    }
  });

  return maxAmountArr[amount] === Infinity ? -1 : maxAmountArr[amount];
};

// console.log(coinChange([1, 2, 5], 11)); // 3
// console.log(coinChange([2], 3)); // -1
// console.log(coinChange([1], 0)); // 0
// console.log(coinChange([186, 419, 83, 408], 6249)); // 20
