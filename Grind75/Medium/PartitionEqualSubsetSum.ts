// https://leetcode.com/problems/partition-equal-subset-sum/

const canPartition = (nums: number[]): boolean => {
  const totalSum = nums.reduce((total, cur) => total + cur, 0);
  if (totalSum % 2 !== 0) return false;
  const partitionSum = totalSum / 2;
  const visitedIndex = new Set<number>();
  // From here we need to figure how to get an array up till the partitionSum, if can get, means true, else false
  const dp: boolean[] = [];
  dp[0] = true;

  nums.forEach((num) => {
    for (let i = partitionSum; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  });

  return dp[partitionSum] || false;

  // The below algorithm will take 0(2*n)
  const recurse = (left: number, visitedIndex: Set<number>): boolean => {
    if (left === 0) return true;
    if (left < 0) return false;

    for (let i = 0; i < nums.length; i++) {
      if (visitedIndex.has(i)) continue;
      visitedIndex.add(i);
      if (recurse(left - nums[i], visitedIndex)) {
        return true;
      } else {
        visitedIndex.delete(i);
      }
    }

    return false;
  };

  return recurse(partitionSum, visitedIndex);
};

console.log(canPartition([1, 5, 11, 5])); // true
console.log(canPartition([1, 2, 3, 5])); // false
