// https://leetcode.com/problems/valid-parentheses/

const map: { [key: string]: string } = { "(": ")", "[": "]", "{": "}" };

const isValid = (s: string): boolean => {
  const stack: string[] = [];
  let valid = true;

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (map[current]) {
      stack.push(current);
    } else if (stack.length) {
      const open = stack.pop()!;
      if (map[open] != current) {
        valid = false;
        break;
      }
    } else {
      valid = false;
      break;
    }
  }

  return valid ? !stack.length : false;
};

console.log(isValid("()")); // True
console.log(isValid("()[]{}")); // True
console.log(isValid("(]")); // Flase
