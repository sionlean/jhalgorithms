// https://leetcode.com/problems/product-of-array-except-self/

const productExceptSelf = (nums: number[]): number[] => {
  // Initialize result array with 1 as the left side start from index 1
  const result: number[] = [];

  // Set rolling
  let rolling = 1;

  // Get rolling multiple from left side of index
  for (let i = 0; i < nums.length; i++) {
    result[i] = rolling;
    rolling *= nums[i];
  }

  // Reset rolling
  rolling = 1;

  //   Get rolling multiple from right side of index
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rolling;
    rolling *= nums[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
