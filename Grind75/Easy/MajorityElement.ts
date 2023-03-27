//https://leetcode.com/problems/majority-element/

const majorityElement = (nums: number[]): number => {
  const length = nums.length;
  let count = 0;
  let number = nums[0];

  for (let i = 0; i < length; i++) {
    const current = nums[i];
    if (count > Math.min(nums.length / 2)) {
      return number;
    } else if (number === current) {
      count++;
    } else if (count === 0) {
      count = 1;
      number = current;
    } else {
      count--;
    }
  }

  return number;
};

// console.log(majorityElement([3, 2, 3])); // 3
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
// console.log(majorityElement([3, 3, 4])); // 3
