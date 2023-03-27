// https://leetcode.com/problems/reverse-linked-list/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const reverseList = (head: ListNode | null): ListNode | null => {
  if (!head) return head;
  let prev = head;
  let next = head.next;
  head.next = null;
  while (next) {
    const temp = next.next;
    next.next = prev;
    prev = next;
    next = temp;
  }

  return prev;
};

// Refer to leetcode for test cases
// Example 1
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2
// Input: head = [1,2]
// Output: [2,1]
// Example 3
// Input: head = []
// Output: []
