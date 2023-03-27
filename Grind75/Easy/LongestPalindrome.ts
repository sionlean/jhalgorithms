// https://leetcode.com/problems/longest-palindrome/

const longestPalindrome = (s: string): number => {
  const length = s.length;
  if (length < 2) return length;

  const map: { [char: string]: number } = {};
  for (let i = 0; i <= length; i++) {
    const char = s[i];
    map[char] = map[char] ? map[char] + 1 : 1;
  }

  const numbers: number[] = Object.values(map);
  const totalPair = numbers.reduce((acc, cur) => {
    const numberOfPairs = Math.floor(cur / 2);
    return acc + numberOfPairs * 2;
  }, 0);

  return totalPair === length ? totalPair : totalPair + 1;
};

console.log(longestPalindrome("abddcccc")); // 7
console.log(longestPalindrome("a")); // 1
