// https://leetcode.com/problems/implement-queue-using-stacks/

class MyQueue {
  s1 = new Stack();
  s2 = new Stack();

  push = (x: number): void => {
    this.s1.push(x);
  };

  pop = (): number | null => {
    this.refill();
    return this.s2.pop()!;
  };

  refill = (): void => {
    if (this.s2.size() === 0)
      while (this.s1.size() !== 0) {
        console.log(this.s1.size());
        this.s2.push(this.s1.pop()!);
      }
  };

  peek = (): number | null => {
    this.refill();
    return this.s2.peek();
  };

  empty = (): boolean => {
    return this.s1.size() + this.s2.size() === 0;
  };
}

class Stack {
  private s: number[] = [];
  // push to top, peek/pop from top, size, and is empty
  constructor() {}

  push = (x: number): void => {
    this.s.push(x);
  };

  peek = (): number => {
    return this.s[this.size() - 1];
  };

  size = (): number => {
    return this.s.length;
  };

  isEmpty = (): boolean => {
    return this.size() === 0;
  };

  pop = (): number | undefined => {
    return this.s.pop();
  };
}
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// Refer to Leetcode for testcase
// Example 1
// Input: ["MyQueue", "push", "push", "peek", "pop", "empty"] [[], [1], [2], [], [], []]
// Output [null, null, null, 1, 1, false]

const q = new MyQueue();
console.log(q.push(1));
console.log(q.push(2));
console.log(q.peek());
console.log(q.pop());
console.log(q.empty());
