// https://leetcode.com/problems/k-closest-points-to-origin/

// Min-heap approach
const kClosest = (points: number[][], k: number): number[][] => {
  const getChildren = (index: number): number[] => {
    return [index * 2 + 1, index * 2 + 2];
  };

  const calculate = (index: number): number => {
    return points[index][0] ** 2 + points[index][1] ** 2;
  };

  const compare = (index: number): number => {
    const length = points.length;
    const [left, right] = getChildren(index);

    if (left >= length) return -1;

    let lowestChild = left;
    if (right < length) {
      lowestChild = calculate(left) < calculate(right) ? left : right;
    }

    return calculate(index) <= calculate(lowestChild) ? -1 : lowestChild;
  };

  const swap = (a: number, b: number): void => {
    [points[a], points[b]] = [points[b], points[a]];
  };

  const heapifyDown = (index: number): void => {
    const indexToSwap = compare(index);
    if (indexToSwap >= 0) {
      swap(index, indexToSwap);
      heapifyDown(indexToSwap);
    }
  };

  const remove = (): number[] => {
    swap(0, points.length - 1);
    const result = points.pop()!;
    heapifyDown(0);
    return result;
  };

  // Find last parent
  const lastParentIndex = Math.max(Math.floor((points.length - 2) / 2), 0);
  for (let i = lastParentIndex; i >= 0; i--) {
    // Heapify everything from start to last parent
    heapifyDown(i);
  }

  const results: number[][] = [];
  for (let i = 0; i < k; i++) {
    results.push(remove());
  }

  return results;
};

// Sort approach
const kClosest2 = (points: number[][], k: number): number[][] => {
  const sorted = points.sort(comparison);
  return sorted.slice(0, k);
};

const comparison = (pointA: number[], pointB: number[]): number => {
  return pointA[0] ** 2 + pointA[1] ** 2 - (pointB[0] ** 2 + pointB[1] ** 2);
};

console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1
  )
); // [[-2, 2]];
console.log(
  kClosest(
    [
      [3, 3],
      [5, -1],
      [-2, 4],
    ],
    2
  )
); // [[3,3],[-2,4]]
console.log(
  kClosest(
    [
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [1, 1],
    ],
    1
  )
); // [[1,1]]
