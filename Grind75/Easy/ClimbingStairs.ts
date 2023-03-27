// https://leetcode.com/problems/climbing-stairs/

const memo: { [number: number]: number } = {};

const climbStairs = (n: number): number => {
  if (n <= 1) return 1;
  if (n <= 2) return 2;

  if (memo[n]) {
    return memo[n];
  } else {
    const number = climbStairs(n - 1) + climbStairs(n - 2);
    memo[n] = number;
    return number;
  }
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
