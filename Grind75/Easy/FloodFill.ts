// https://leetcode.com/problems/flood-fill/

const floodFill = (
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] => {
  const set = new Set();
  const startingColor = image[sr][sc];
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const isValid = (image: number[][], sr: number, sc: number): boolean => {
    const row = image.length;
    const col = image[0].length;

    if (sr < 0 || sr >= row) return false; // Check if row is valid
    if (sc < 0 || sc >= col) return false; // Check if col is valid
    if (set.has(`${sr}${sc}`)) return false; // Check if already checked
    set.add(`${sr}${sc}`);
    const currentColor = image[sr][sc];
    return currentColor === startingColor; // Check if color is valid
  };

  const recurse = (image: number[][], sr: number, sc: number): void => {
    if (isValid(image, sr, sc)) {
      image[sr][sc] = color;

      directions.forEach(direction => {
        const [r, c] = direction;
        recurse(image, sr + r, sc + c);
      });
    }
  };

  recurse(image, sr, sc);
  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
); // [[2,2,2],[2,2,0],[2,0,1]]

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    0
  )
); // [[0, 0, 0],[0, 0, 0]];
