// https://leetcode.com/problems/evaluate-reverse-polish-notation/

const evalRPN = (tokens: string[]): number => {
  const stack: number[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (isNaN(+token)) {
      const b = stack.pop()!;
      const a = stack.pop()!;
      switch (token) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          const result = a / b;
          stack.push(result > 0 ? Math.floor(result) : Math.ceil(result));
          break;
      }
    } else {
      stack.push(+token);
    }
  }

  return stack.pop()!;
};

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
); // 22
