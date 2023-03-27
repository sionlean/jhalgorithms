// https://leetcode.com/problems/diameter-of-binary-tree/

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

const diameterOfBinaryTree = (root: TreeNode | null): number => {
  if (!root) return 0;
  let maxDiameter = 0;

  const recurse = (node: TreeNode | null): number => {
    // If empty node return 0
    if (!node) return 0;

    const left = node.left ? recurse(node.left) + 1 : 0;
    const right = node.right ? recurse(node.right) + 1 : 0;

    // Check subnode to see if have max
    maxDiameter = Math.max(left + right, maxDiameter);

    // Return length of longest side
    return Math.max(left, right);
  };

  recurse(root);
  return maxDiameter;
};

const diameterOfBinaryTree2 = (root: TreeNode | null): number => {
  if (!root) return 0;
  let maxDiameter = 0;

  const recurse = (node: TreeNode | null): number => {
    // If empty node return 0
    if (!node) return 0;

    const left = recurse(node.left);
    const right = recurse(node.right);

    // Check subnode to see if have max
    maxDiameter = Math.max(left + right, maxDiameter);

    // Return length of longest side
    return Math.max(left, right) + 1;
  };

  recurse(root);
  return maxDiameter;
};

// Refer to leetcode for test cases
// Example 1
// Input: root = [1,2,3,4,5]
// Output: 3
// Example 2
// Input: root = [1,2]
// Output: 1
// Example 3
// Input: root = [1]
// Output: 0
// Example 4
// Input: root = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// Output: 7
