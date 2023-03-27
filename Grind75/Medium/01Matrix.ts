// https://leetcode.com/problems/01-matrix/

// Faster solution, go through once from top down and another time from bottom up and compare with neighbour
const updateMatrix = (mat: number[][]): number[][] => {
  const r = mat.length;
  const c = mat[0].length;
  const results: number[][] = [];

  for (let i = 0; i < r; i++) {
    results[i] = new Array(c).fill(Number.MAX_VALUE);
    for (let j = 0; j < c; j++) {
      if (mat[i][j] === 0) {
        results[i][j] = 0;
      } else {
        if (i > 0) {
          results[i][j] = Math.min(results[i - 1][j] + 1, results[i][j]);
        }

        if (j > 0) {
          results[i][j] = Math.min(results[i][j - 1] + 1, results[i][j]);
        }
      }
    }
  }

  for (let i = r - 1; i >= 0; i--) {
    for (let j = c - 1; j >= 0; j--) {
      if (mat[i][j] !== 0) {
        if (i < r - 1) {
          results[i][j] = Math.min(results[i + 1][j] + 1, results[i][j]);
        }

        if (j < c - 1) {
          results[i][j] = Math.min(results[i][j + 1] + 1, results[i][j]);
        }
      }
    }
  }

  return results;
};

const DIRECTIONS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const updateMatrix2 = (mat: number[][]): number[][] => {
  const results = JSON.parse(JSON.stringify(mat));
  const visited: { [key: string]: boolean } = {};
  let queue: number[][] = [...getZeroCoordinates(mat)];
  let subqueue: number[][] = [];
  let counter = 0;

  while (queue.length) {
    const coordinate = queue.pop()!;

    const [r, c] = coordinate;
    const key = `${r},${c}`;

    if (visited[key] === undefined) {
      visited[key] = true;
      results[r][c] = counter;

      DIRECTIONS.forEach(([a, b]) => {
        const newPosition = [r + a, c + b];
        isValid(mat, newPosition) && subqueue.push(newPosition);
      });
    }

    if (queue.length === 0 && subqueue.length) {
      queue = subqueue;
      subqueue = [];
      counter++;
    }
  }

  return results;
};

const isValid = (mat: number[][], [x, y]: number[]): boolean => {
  const r = mat.length;
  const c = mat[0].length;

  if (x < 0 || x >= r) return false;
  if (y < 0 || y >= c) return false;

  return true;
};

const getZeroCoordinates = (mat: number[][]): number[][] => {
  const r = mat.length;
  const c = mat[0].length;
  const results: number[][] = [];

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (mat[i][j] === 0) results.push([i, j]);
    }
  }

  return results;
};

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
); // [[0,0,0],[0,1,0],[0,0,0]];
console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
); // [[0,0,0],[0,1,0],[1,2,1]];

console.log(
  updateMatrix([
    [
      1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1,
      1, 1, 0, 1, 1,
    ],
    [
      1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
      0, 1, 0, 0, 1,
    ],
    [
      1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0,
      1, 0, 1, 1, 1,
    ],
    [
      1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1,
      1, 1, 0, 0, 1,
    ],
    [
      0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0,
      1, 1, 1, 0, 1,
    ],
    [
      1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0,
      1, 0, 0, 1, 0,
    ],
    [
      1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1,
      0, 1, 1, 1, 1,
    ],
    [
      1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0,
      0, 1, 0, 0, 1,
    ],
    [
      0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1,
      0, 0, 1, 0, 1,
    ],
    [
      1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0,
      0, 0, 0, 1, 1,
    ],
    [
      1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1,
      0, 1, 1, 1, 0,
    ],
    [
      1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0,
      1, 1, 1, 1, 1,
    ],
  ])
);
