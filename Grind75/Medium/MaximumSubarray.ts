// https://leetcode.com/problems/maximum-subarray/

const maxSubArray = (nums: number[]): number => {
  const arr = [...nums];
  let maxSum = nums[0];

  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.max(0, arr[i - 1]) + arr[i]; // Find max sum possible from start to current i, with current i in it
    maxSum = Math.max(arr[i], maxSum); // Find max sum thus far
  }

  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
console.log(maxSubArray([-2, -1])); // -1
