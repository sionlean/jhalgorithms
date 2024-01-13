// https://leetcode.com/problems/word-break/

const wordBreak = (s: string, wordDict: string[]): boolean => {
  if (!s) return true;
  if (!wordDict || wordDict.length === 0) return false;

  // Put into set for easy accessing
  const set = new Set<string>(wordDict);
  const visited = new Set<number>();
  const queue = [0];
  visited.add(0);

  while (queue.length) {
    const start = queue.pop()!;

    for (let end = start + 1; end <= s.length; end++) {
      const current = s.slice(start, end);
      if (set.has(current)) {
        if (end === s.length) return true;

        if (!visited.has(end)) {
          queue.push(end);
          visited.add(start);
        }
      }
    }
  }

  return false;
};

// console.log(wordBreak("leetcode", ["leet", "code"])); // true
// console.log(wordBreak("applepenapple", ["apple", "pen"])); // true
// console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false
// console.log(wordBreak("ccbb", ["bc", "cb"])); // false
// console.log(wordBreak("cbca", ["bc", "ca"])); // false
console.log(
  wordBreak("aaaaaaaaaaaaaaaaab", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
    "aaaaaa",
    "aaaaaaa",
    "aaaaaaaa",
    "aaaaaaaaa",
  ])
);
