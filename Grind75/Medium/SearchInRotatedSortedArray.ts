// https://leetcode.com/problems/search-in-rotated-sorted-array/

// Use the concept where one side will always be sorted. Check if the sorted side have target. If yes narrow to that side, else the other side
const search2 = (nums: number[], target: number): number => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor(right + (left - right) / 2);
    const midNumber = nums[mid];
    const leftNumber = nums[left];
    const rightNumber = nums[right];

    if (midNumber === target) {
      return mid;
    } else if (midNumber >= leftNumber) {
      // Left is sorted
      if (target >= leftNumber && target < midNumber) {
        // Is at left side
        right = mid - 1;
      } else {
        left = mid + 1;
        // Is at right side
      }
    } else {
      // Right is sorted if left is not
      if (target > midNumber && target <= rightNumber) {
        // Is at right side
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return nums[right] === target ? right : -1;
};

const findPivotAtLargestNumber = (nums: number[]): number => {
  const first = nums[0];
  let start = 0;
  let end = nums.length - 1;

  while (end - start > 1) {
    const mid = Math.floor(start + (end - start) / 2);
    const num = nums[mid];

    if (num > first) {
      start = mid;
    } else {
      end = mid;
    }
  }

  return nums[start] > nums[end] ? start : end;
};

// Search by finding pivot using Binary Search then using Binary Search again to find result based on pivot
const search = (nums: number[], target: number): number => {
  if (nums.length === 1) return nums[0] === target ? 0 : -1;

  const pivot = findPivotAtLargestNumber(nums);
  const pivotNumber = nums[pivot];

  if (pivotNumber === target) return pivot;

  let start = nums[0] > target ? pivot + 1 : 0;
  let end = nums[0] > target ? nums.length - 1 : pivot - 1;
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);
    const midNumber = nums[mid];

    if (target === midNumber) {
      return mid;
    } else if (target < midNumber) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return nums[start] === target ? start : -1;
};

console.log(search2([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search2([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search2([1], 0)); // -1
console.log(search2([1, 3], 3)); // 1
console.log(search2([3, 1], 1)); // 1
