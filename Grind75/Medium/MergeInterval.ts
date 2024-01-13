// https://leetcode.com/problems/merge-intervals/

const merge = (intervals: number[][]): number[][] => {
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  const results = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    const prev = results[results.length - 1];

    if (prev[1] < current[0]) {
      results.push(current);
    } else {
      prev[1] = Math.max(prev[1], current[1]);
    }
  }

  return results;
};

const merge2 = (intervals: number[][]): number[][] => {
  intervals.sort((a, b) => a[0] - b[0]);

  const results: number[][] = [];
  let start = 1;
  let current = intervals[0];

  while (start < intervals.length) {
    const next = intervals[start];

    if (current[1] >= next[0]) {
      current = [Math.min(current[0], next[0]), Math.max(current[1], next[1])];
    } else {
      results.push(current);
      current = next;
    }
    start++;
  }

  results.push(current);
  return results;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // [[1,6],[8,10],[15,18]]
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
); // [[1,5]]
