// https://leetcode.com/problems/middle-of-the-linked-list/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const middleNode = (head: ListNode | null): ListNode | null => {
  let fast = head;
  let slow = head;

  while (fast?.next) {
    fast = fast.next.next;
    slow = slow!.next;
  }

  return slow;
};

// Refer to leetcode for test cases
// Example 1
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Example 2
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
