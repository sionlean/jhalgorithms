//https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = (s: string): number => {
  let start = 0;
  let end = 0;
  let max = 0;
  const charMap: { [key: string]: number } = {};

  while (end < s.length) {
    const char = s[end];
    // Check if already in map and if the index is after the start, as start cannot move back
    if (charMap[char] !== undefined && charMap[char] >= start) {
      start = charMap[char] + 1;
    }

    max = Math.max(max, end - start + 1);
    charMap[char] = end;
    end++;
  }

  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("")); // 0
console.log(lengthOfLongestSubstring("abba")); // 2
