// https://leetcode.com/problems/balanced-binary-tree/

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

const isBalanced = (root: TreeNode | null): boolean => {
  if (!root) return true;

  const recurse = (node: TreeNode | null, height: number): number => {
    if (!node) return height - 1;
    const leftHeight = recurse(node.left, height + 1);
    const rightHeight = recurse(node.right, height + 1);

    if (leftHeight === -1 || rightHeight === -1) return -1;
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    return Math.max(leftHeight, rightHeight);
  };

  return recurse(root, 0) !== -1;
};

const isBalanced2 = (root: TreeNode | null): boolean => {
  if (!root) return true;

  const recurse = (node: TreeNode | null): number => {
    if (!node) return 0;
    const leftHeight = recurse(node.left);
    const rightHeight = recurse(node.right);

    if (leftHeight === -1 || rightHeight === -1) return -1;
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    return Math.max(leftHeight, rightHeight) + 1;
  };

  return recurse(root) !== -1;
};

// Example 1
// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3
// Input: root = []
// Output: true

export default isBalanced;
