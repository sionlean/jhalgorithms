//https://leetcode.com/problems/3sum/

const threeSum = (nums: number[]): number[][] => {
  const target = 0;
  const results: number[][] = [];
  if (nums.length < 3) return results;

  const sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length - 2; i++) {
    if (sorted[i] > target) break;
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;

    let j = i + 1;
    let k = sorted.length - 1;

    while (j < k) {
      let sum = sorted[i] + sorted[j] + sorted[k];

      if (sum === target) {
        results.push([sorted[i], sorted[j], sorted[k]]);

        // Handle duplicates
        while (sorted[j] === sorted[j + 1]) j++;
        while (sorted[k] === sorted[k - 1]) k--;
        j++;
        k--;
      } else if (sum > target) {
        k--;
      } else {
        j++;
      }
    }
  }

  return results;
};

const threeSum2 = (nums: number[]): number[][] => {
  const target = 0;
  const results: number[][] = [];
  if (nums.length < 3) return results;
  const sortedNums = nums.sort((a, b) => a - b);

  const twoSum = (index: number, target: number): number[][] => {
    const results: number[][] = [];
    let start = index;
    let end = sortedNums.length - 1;

    while (start < end) {
      const currentStart = sortedNums[start];
      const currentEnd = sortedNums[end];
      const targetToFind = target - currentStart;

      if (targetToFind > currentEnd) {
        start++;
      } else if (targetToFind < currentEnd) {
        end--;
      } else {
        results.push([currentStart, currentEnd]);

        while (nums[start] === nums[start + 1]) start++;
        while (nums[end] === nums[end - 1]) end--;

        start++;
        end--;
      }
    }

    return results;
  };

  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (sortedNums[i] > target) break;
    const firstNumber = sortedNums[i];
    if (i > 0 && firstNumber === sortedNums[i - 1]) continue;

    const twoSumTarget = target - firstNumber;
    const twoSums = twoSum(i + 1, twoSumTarget);
    twoSums.forEach(result => {
      results.push([firstNumber, ...result]);
    });
  }

  return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, 0, 1], [-1, -1, 2]]
console.log(threeSum([])); // []
console.log(threeSum([0])); // []
console.log(threeSum([0, 0, 0])); // [[0,0,0]]
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])); // [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
