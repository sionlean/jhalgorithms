// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

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
  // Base
  if (!root) return null;

  if (root.val === p!.val || root.val === q!.val) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // Results
  if (left && right) return root;

  if (left) return left;
  if (right) return right;
  return null;
};

const lowestCommonAncestor2 = (
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null => {
  // Root is the default answer
  let result: TreeNode | null = null;

  const search = (node: TreeNode | null): boolean[] => {
    // If empty node, return
    if (!node) return [false, false];

    // Search left subtree
    const [leftleft, leftright] = search(node.left);

    // Search right subtree
    const [rightleft, rightright] = search(node.right);

    // Evaluate if there is p and q
    const haveP = leftleft || rightleft || node.val === p!.val;
    const haveQ = rightright || leftright || node.val === q!.val;
    const resultArr = [haveP, haveQ];

    if (resultArr[0] && resultArr[1] && !result) {
      result = node;
    }

    return resultArr;
  };

  search(root);
  return result || root;
};

// Refer to leetcode for testcases
// Example 1:
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Example 2:
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Example 3:
// Input: root = [1,2], p = 1, q = 2
// Output: 1
