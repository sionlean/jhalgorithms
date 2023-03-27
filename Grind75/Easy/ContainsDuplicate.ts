// https://leetcode.com/problems/contains-duplicate/

const containsDuplicate = (nums: number[]): boolean => {
  return nums.length !== new Set(nums).size;
};

const containsDuplicate2 = (nums: number[]): boolean => {
  const numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (numsMap[num]) return true;
    else numsMap[num] = 1;
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
