// https://leetcode.com/problems/two-sum/

const twoSum = (nums: number[], target: number): number[] => {
  const numberMap: { [key: number]: number } = {};
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const required = target - nums[i];
    if (numberMap[required] != undefined) {
      result = [i, numberMap[required]];
      break;
    } else {
      numberMap[nums[i]] = i;
    }
  }

  return result;
};

console.log(twoSum([2, 7, 11, 15], 9)); // [1, 0]
console.log(twoSum([3, 2, 4], 6)); // [2,1]
console.log(twoSum([3, 3], 6)); // [1,0]
