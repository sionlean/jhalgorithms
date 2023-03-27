// https://leetcode.com/problems/merge-two-sorted-lists/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeTwoLists = (l1: ListNode, l2: ListNode): ListNode => {
  let ptr1: ListNode | null = l1;
  let ptr2: ListNode | null = l2;
  let head: ListNode | undefined = undefined;
  let headPtr: ListNode | undefined = undefined;

  while (ptr1 && ptr2) {
    if (headPtr) {
      if (ptr1.val <= ptr2.val) {
        headPtr.next = ptr1;
        ptr1 = ptr1.next;
      } else {
        headPtr.next = ptr2;
        ptr2 = ptr2.next;
      }
      headPtr = headPtr.next;
      headPtr.next = null;
    } else {
      if (ptr1.val <= ptr2.val) {
        head = ptr1;
        headPtr = ptr1;
        ptr1 = ptr1.next;
      } else {
        head = ptr2;
        headPtr = ptr2;
        ptr2 = ptr2.next;
      }

      head.next = null;
    }
  }

  if (head) {
    headPtr!.next = ptr1 || ptr2;
    return head;
  } else {
    return l1 || l2;
  }
};

const mergeTwoListsRecursive = (l1: ListNode, l2: ListNode): ListNode => {
  if (l1 == null) return l2;
  if (l2 == null) return l1;

  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next!, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next!);
    return l2;
  }
};

// Refer to Leetcode for testcase
