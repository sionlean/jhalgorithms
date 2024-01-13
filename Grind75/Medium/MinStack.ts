// https://leetcode.com/problems/min-stack/

class StackNode {
  constructor(public value: number, public minValue: number) {}
}

class MinStack {
  private stack: StackNode[] = [];
  constructor() {}

  push(val: number): void {
    const minValue = this.stack.length
      ? this.getMin() < val
        ? this.getMin()
        : val
      : val;
    const node = new StackNode(val, minValue);
    this.stack.push(node);
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1].value;
  }

  getMin(): number {
    return this.stack[this.stack.length - 1].minValue;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explaination
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2
