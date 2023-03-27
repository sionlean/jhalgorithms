// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = (prices: number[]): number => {
  // A variable to track the profits
  // Iterate and Track lowest number and update profits if number is higher

  let profit = 0;
  let lowest = prices[0];

  prices.forEach(price => {
    if (price < lowest) {
      lowest = price;
    } else {
      profit = Math.max(profit, price - lowest);
    }
  });

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
