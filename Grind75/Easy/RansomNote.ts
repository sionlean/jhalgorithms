// https://leetcode.com/problems/ransom-note/

const canConstruct = (ransomNote: string, magazine: string): boolean => {
  const length = magazine.length;
  const letterMap: { [alphabet: string]: number } = {};

  for (let i = 0; i < length; i++) {
    const char = magazine[i];
    letterMap[char] = letterMap[char] ? letterMap[char] + 1 : 1;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];
    if (letterMap[char] && letterMap[char] > 0) {
      letterMap[char]--;
    } else {
      return false;
    }
  }

  return true;
};

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true
