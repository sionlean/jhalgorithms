// https://leetcode.com/problems/linked-list-cycle/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const hasCycle = (head: ListNode | null): boolean => {
  if (!head || !head.next) return false;

  let fast = head;
  let slow = head;

  do {
    if (fast.next && fast.next.next) {
      fast = fast.next.next;
    } else {
      return false;
    }

    slow = slow.next!;
  } while (fast !== slow);

  return true;
};

// Refer to Leetcode for testcase
// Example 1
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Example 2
// Input: head = [1,2], pos = 0
// Output: true
// Example 3
// Input: head = [1], pos = -1
// Output: false
