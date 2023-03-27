// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

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

const lowestCommonAncestor = (
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null => {
  const lowest = Math.min(p!.val, q!.val);
  const highest = Math.max(p!.val, q!.val);

  while (root) {
    const rootVal = root.val;
    if (rootVal > highest) {
      // Both p and q are left hand side, go left
      root = root.left;
    } else if (rootVal < lowest) {
      //  Both p and q are right hand side, go right
      root = root.right;
    } else {
      return root;
    }
  }

  return null;
};

export default lowestCommonAncestor;

// Refer to leetcode for testcase
// Example 1
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Example 2
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Example 3
// Input: root = [2,1], p = 2, q = 1
// Output: 2
