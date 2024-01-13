// https://leetcode.com/problems/combination-sum/

// Using backtrack by using the same current
const combinationSum = (candidates: number[], target: number): number[][] => {
  if (candidates.length === 0) return [];
  const sorted = candidates.sort((a, b) => a - b);
  const results: number[][] = [];
  const current: number[] = [];

  const recurse = (startIndex: number, target: number): void => {
    for (let i = startIndex; i < sorted.length; i++) {
      const candidate = sorted[i];

      if (candidate === target) {
        results.push([...current, candidate]);
      } else if (candidate < target) {
        // Using startIndex as i will prevent the lower numbers to be called recusively added, preventing duplicate entries
        current.push(candidate);
        recurse(i, target - candidate);
        current.pop();
      }
    }
  };

  recurse(0, target);
  return results;
};

// Using new array, but this method will take up more space
const combinationSum2 = (candidates: number[], target: number): number[][] => {
  if (candidates.length === 0) return [];
  const sorted = candidates.sort((a, b) => a - b);
  const results: number[][] = [];

  const recurse = (
    startIndex: number,
    current: number[],
    target: number
  ): void => {
    for (let i = startIndex; i < sorted.length; i++) {
      const candidate = sorted[i];
      const newCurrents = [...current, candidate];
      if (candidate === target) {
        results.push(newCurrents);
      } else if (candidate < target) {
        // Using startIndex as i will prevent the lower numbers to be called recusively added, preventing duplicate entries
        recurse(i, newCurrents, target - candidate);
      }
    }
  };

  recurse(0, [], target);
  return results;
};

console.log(combinationSum([2, 3, 6, 7], 7)); // [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8)); // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1)); // []
