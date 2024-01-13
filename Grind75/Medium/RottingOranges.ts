// https://leetcode.com/problems/rotting-oranges/

const DIRECTIONS = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

const orangesRotting = (grid: number[][]): number => {
  const r = grid.length;
  const c = grid[0].length;
  let list: number[][] = [];
  let freshCount: number = 0;
  let time = 0;

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] === 2) list.push([i, j]);
      if (grid[i][j] === 1) freshCount++;
    }
  }

  while (list.length) {
    const result: number[][] = [];

    for (let i = 0; i < list.length; i++) {
      const [x, y] = list[i];

      DIRECTIONS.forEach((direction) => {
        const newR = x + direction[0];
        const newC = y + direction[1];

        if (
          newR >= 0 &&
          newC >= 0 &&
          newR < r &&
          newC < c &&
          grid[newR][newC] === 1
        ) {
          freshCount--;
          grid[newR][newC] = 2;
          result.push([newR, newC]);
        }
      });
    }

    if (result.length) time++;
    list = result;
  }

  return freshCount > 0 ? -1 : time;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
); // 4
console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ])
); // -1
console.log(orangesRotting([[0, 2]])); // 0
