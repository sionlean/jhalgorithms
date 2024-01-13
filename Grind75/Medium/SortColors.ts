// https://leetcode.com/problems/sort-colors/

/**
 Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums: number[]): void => {
  let start = 0;
  let end = nums.length - 1;
  let i = 0;

  const swap = (i: number, j: number): void => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  };

  while (i <= end) {
    const target = nums[i];

    if (target === 0) {
      swap(i, start);
      start++;
      i++;
    } else if (target === 1) {
      i++;
    } else {
      swap(i, end);
      end--;
    }
  }
};

console.log(sortColors([2, 0, 2, 1, 1, 0])); // [0,0,1,1,2,2]
console.log(sortColors([2, 0, 1])); // [0,1,2]
