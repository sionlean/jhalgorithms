// https://leetcode.com/problems/validate-binary-search-tree/

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

const check = (
  node: TreeNode | null,
  lower: number | null,
  upper: number | null
): boolean => {
  if (!node) return true;

  if (lower != null && node.val <= lower) return false;
  if (upper != null && node.val >= upper) return false;

  return (
    check(node.left, lower, node.val) && check(node.right, node.val, upper)
  );
};

const isValidBST = (root: TreeNode | null): boolean => {
  return check(root, -Infinity, Infinity);
};

// Refer to leetcode for test cases
// Example 1
// Input: root = [2, 1, 3];
// Output: true;
// Example 2
// Input: root = [5,1,4,null,null,3,6]
// Output: false
