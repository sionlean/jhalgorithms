// https://leetcode.com/problems/valid-palindrome/

const isAlphNumeric = (c: string): boolean => {
  const code = c.charCodeAt(0);
  const isAlphabet = code >= 97 && code <= 122;
  const isNumber = !isNaN(+c);
  return (isAlphabet || isNumber) && c !== " ";
};

const isPalindrome = (s: string): boolean => {
  // Lowercase and check if is alphanumeric each iteration
  // Iterate from both end until overlap
  s = s.toLowerCase();
  let ptr1 = 0;
  let ptr2 = s.length - 1;

  while (ptr1 < ptr2) {
    const c1 = s[ptr1];
    const c2 = s[ptr2];

    if (!isAlphNumeric(c1)) {
      ptr1++;
      continue;
    }
    if (!isAlphNumeric(c2)) {
      ptr2--;
      continue;
    }

    if (c1 != c2) return false;
    else {
      ptr1++;
      ptr2--;
    }
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // True
console.log(isPalindrome("race a car")); // False
console.log(isPalindrome(" ")); // True
