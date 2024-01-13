// https://leetcode.com/problems/binary-tree-level-order-traversal/

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

class DequeNode {
  val: TreeNode;
  prev: DequeNode | null;
  next: DequeNode | null;

  constructor(value: TreeNode) {
    this.val = value;
  }
}

class Deque {
  head: DequeNode | null;
  tail: DequeNode | null;
  length = 0;
  constructor() {}

  push = (node: DequeNode): void => {
    if (this.head && this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
  };

  shift = (): DequeNode | null => {
    if (this.head) {
      const temp = this.head;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }

      this.length--;
      return temp;
    } else {
      return null;
    }
  };
}

const levelOrder = (root: TreeNode | null): number[][] => {
  if (!root) return [];
  const result: number[][] = [];
  let queue: Deque = new Deque();
  queue.push(new DequeNode(root));
  let subqueue = new Deque();
  let subResult: number[] = [];

  while (queue.length) {
    const dequeNode = queue.shift()!;
    const { left, right, val } = dequeNode.val;
    subResult.push(val);

    left && subqueue.push(new DequeNode(left));
    right && subqueue.push(new DequeNode(right));

    if (!queue.length && subqueue.length) {
      queue = subqueue;
      subqueue = new Deque();
      result.push(subResult);
      subResult = [];
    }
  }

  if (subResult.length) result.push(subResult);

  return result;
};

// Refer to leetcode for test cases
// Example 1
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2
// Input: root = [1]
// Output: [[1]]
// Example 3
// Input: root = []
// Output: []
