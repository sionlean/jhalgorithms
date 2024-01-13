// https://leetcode.com/problems/number-of-islands/

const DIRECTIONS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const check = (grid: string[][], [x, y]: number[]): void => {
  const r = grid.length;
  const c = grid[0].length;
  if (grid[x][y] === "0") return;
  grid[x][y] = "0";

  DIRECTIONS.forEach(([a, b]) => {
    const newR = x + a;
    const newC = y + b;

    if (newR >= 0 && newR < r && newC >= 0 && newC < c) {
      check(grid, [newR, newC]);
    }
  });
};

// Change "1" to "0"
const numIslands = (grid: string[][]): number => {
  const r = grid.length;
  const c = grid[0].length;
  let count = 0;

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] === "1") {
        count++;
        check(grid, [i, j]);
      }
    }
  }

  return count;
};

const check2 = (
  grid: string[][],
  visited: Set<string>,
  [x, y]: number[]
): void => {
  const r = grid.length;
  const c = grid[0].length;
  const key = `${x},${y}`;
  if (grid[x][y] === "0") return;
  if (visited.has(key)) return;
  grid[x][y] = "0";

  DIRECTIONS.forEach(([a, b]) => {
    const newR = x + a;
    const newC = y + b;

    if (newR >= 0 && newR < r && newC >= 0 && newC < c) {
      check2(grid, visited, [newR, newC]);
    }
  });
};

// Use visited set to track visited state
const numIslands2 = (grid: string[][]): number => {
  const r = grid.length;
  const c = grid[0].length;
  const visited: Set<string> = new Set();
  let count = 0;

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      const key = `${i},${j}`;
      if (visited.has(key)) {
        continue;
      } else if (grid[i][j] === "0") {
        visited.add(key);
      } else {
        check2(grid, visited, [i, j]);
        count++;
      }
    }
  }

  return count;
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
); // 1
console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
); // 3
