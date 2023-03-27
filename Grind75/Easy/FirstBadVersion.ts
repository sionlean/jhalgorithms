// https://leetcode.com/problems/first-bad-version/

// More elegant, end always show the bad, so end of while can just return end. Take into account overflow. use end - start > 1 as condition to allow end = mid and start = mid,
// so that start always good version and end always bad version will hold true
const solution = (isBadVersion: any) => {
  return (n: number): number => {
    let start = 0;
    let end = n;

    while (end - start > 1) {
      const mid = Math.floor(start + (end - start) / 2); // This mehthod will prevent overflow
      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid;
      }
    }

    return end;
  };
};

// Original solution which focuses on finding result only after pointers pass each other
const solution2 = (isBadVersion: any) => {
  return (n: number): number => {
    let start = 1;
    let end = n;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      const result = isBadVersion(mid);

      if (start === end) {
        return result ? mid : mid + 1;
      } else if (result) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return -1;
  };
};

// Refer to Leetcode for testcase
// Example 1
// Input: n = 5, bad = 4
// Output: 4
// Example 2
// Input: n = 1, bad = 1
// Output: 1
