// https://leetcode.com/problems/maximum-depth-of-binary-tree/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const maxDepth = (root: TreeNode | null): number => {
  if (!root) return 0;
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return Math.max(left, right) + 1;
};

// Refer to leetcode for test cases
// Example 1
// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2
// Input: root = [1,null,2]
// Output: 2
// Example 3
// Input: root = []
// Output: 0
// Example 4
// Input: root = [0]
// Output: 1
