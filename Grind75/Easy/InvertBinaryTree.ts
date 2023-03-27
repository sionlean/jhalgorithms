// https://leetcode.com/problems/invert-binary-tree/

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

const invertTree = (root: TreeNode | null): TreeNode | null => {
  // Base case
  if (!root) return root;
  if (root?.left === null && root?.right === null) return root;

  // Recursive case
  [root.left, root.right] = [root.right, root.left];
  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);

  return root;
};

// Refer to Leetcode for testcase
// Example 1
// Input: [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2
// Input: [2,1,3]
// Output [2,3,1]
// Example 3
// Input:  []
// Output: []
