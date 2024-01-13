// https://leetcode.com/problems/permutations/

// Using backtracking method, save more memory but more operations
const permute = (nums: number[]): number[][] => {
  const result: number[][] = [];
  const used: { [number: number]: boolean } = {};

  const permuteWithBacktrack = (cur: number[]): void => {
    if (cur.length === nums.length) {
      result.push([...cur]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (!used[num]) {
        used[num] = true;
        cur.push(num);
        permuteWithBacktrack(cur);
        cur.pop();
        used[num] = false;
      }
    }
  };

  permuteWithBacktrack([]);
  return result;
};

// Bottom up approach to build all the permutation, faster but more space
const permute2 = (nums: number[]): number[][] => {
  let counter = nums.length - 1;
  let permuteStack = [[nums[0]]];

  while (counter > 0) {
    const newStack: number[][] = [];
    const newNumber = nums[nums.length - counter];
    while (permuteStack.length) {
      const current = permuteStack.pop()!;

      for (let i = 0; i < current.length + 1; i++) {
        const newArray = [
          ...current.slice(0, i),
          newNumber,
          ...current.slice(i),
        ];
        newStack.push(newArray);
      }
    }

    permuteStack = newStack;
    counter--;
  }

  return permuteStack;
};

console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0, 1])); // [[0,1],[1,0]]
console.log(permute([1])); // [[1]]
