// https://leetcode.com/problems/valid-anagram/

const isAnagram = (s: string, t: string): boolean => {
  if (s.length != t.length) return false;

  const charObject = {};
  for (let i = 0; i < s.length; i++) {
    charObject[s[i]] = charObject[s[i]] ? charObject[s[i]] + 1 : 1;
    charObject[t[i]] = charObject[t[i]] ? charObject[t[i]] - 1 : -1;
  }

  return Object.values(charObject).every(value => value === 0);
};

console.log(isAnagram("anagram", "nagaram")); // True
console.log(isAnagram("rat", "car")); // False
