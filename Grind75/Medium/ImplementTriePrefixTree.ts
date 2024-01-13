// https://leetcode.com/problems/implement-trie-prefix-tree/

class TrieNode {
  isEndOfWOrd = false;
  children: { [key: string]: TrieNode } = {};
  constructor(public value: string | null) {}
}

class Trie {
  root = new TrieNode(null);

  constructor() {}

  insert(word: string): void {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children[char]) {
        current.children[char] = new TrieNode(char);
      }

      current = current.children[char];
    }

    current.isEndOfWOrd = true;
  }

  search(word: string): boolean {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (current.children[char]) {
        current = current.children[char];
      } else {
        return false;
      }
    }

    return current.isEndOfWOrd;
  }

  startsWith(prefix: string): boolean {
    let current = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (current.children[char]) {
        current = current.children[char];
      } else {
        return false;
      }
    }

    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// Refer to leetcode for test cases
// Example 1
// Input[("Trie", "insert", "search", "search", "startsWith", "insert", "search")][
//   ([], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"])
// ];
// Output[(null, null, true, false, true, null, true)];
