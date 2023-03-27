// https://leetcode.com/problems/insert-interval/

// Cleaner version
const insert = (intervals: number[][], newInterval: number[]): number[][] => {
  const length = intervals.length;
  if (length === 0) return [newInterval];
  let current: number[] = newInterval;
  const left: number[][] = [];
  const right: number[][] = [];

  for (let i = 0; i < length; i++) {
    const interval = intervals[i];
    if (current[0] > interval[1]) {
      left.push(interval);
    } else if (current[1] < interval[0]) {
      right.push(interval);
    } else {
      current = [
        Math.min(current[0], interval[0]),
        Math.max(current[1], interval[1]),
      ];
    }
  }

  return [...left, current, ...right];
};

const insert2 = (intervals: number[][], newInterval: number[]): number[][] => {
  const length = intervals.length;
  if (length === 0) return [newInterval];
  const newIntervals: number[][] = [];
  let current: number[] = newInterval;
  let addedCurrent = false;

  for (let i = 0; i < length; i++) {
    const interval = intervals[i];
    console.log(interval, i, newIntervals);
    if (current[0] > interval[1]) {
      newIntervals.push(interval);
    } else if (current[1] < interval[0]) {
      if (!addedCurrent) {
        newIntervals.push(current);
        addedCurrent = true;
      }
      newIntervals.push(interval);
    } else {
      current = [
        Math.min(current[0], interval[0]),
        Math.max(current[1], interval[1]),
      ];
    }
  }

  if (!addedCurrent) {
    newIntervals.push(current);
  }

  return newIntervals;
};

console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
); // [[1,5],[6,9]]
console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
); // [[1,2],[3,10],[12,16]]
console.log(insert([], [5, 7])); // [[5,7]]
console.log(insert([[1, 5]], [2, 3])); // [[1,5]]
console.log(
  insert(
    [
      [2, 5],
      [6, 7],
      [8, 9],
    ],
    [0, 1]
  )
);
