// https://leetcode.com/problems/binary-search/

const search = (nums: number[], target: number): number => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const value = nums[mid];

    if (value > target) {
      right = mid - 1;
    } else if (value < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
