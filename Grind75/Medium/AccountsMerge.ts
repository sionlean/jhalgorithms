// https://leetcode.com/problems/accounts-merge/

// Using Graph / DFS method
const accountsMerge = (accounts: string[][]): string[][] => {
  const graph = new Map<string, Set<string>>();
  const nameMap = new Map<string, string>();

  for (const account of accounts) {
    const [name, ...emails] = account;

    emails.forEach((email, index) => {
      if (!graph.has(email)) graph.set(email, new Set());

      if (index) {
        graph.get(emails[0])?.add(email);
        graph.get(email)?.add(emails[0]);
      }

      nameMap.set(email, name);
    });
  }

  const dfs = (
    current: string,
    emails: string[],
    visited: Set<string>
  ): void => {
    if (!visited.has(current)) {
      visited.add(current);
      emails.push(current);
      const neighbours = graph.get(current);

      if (!neighbours || neighbours?.size === 0) return;

      for (const neighbour of neighbours) {
        dfs(neighbour, emails, visited);
      }
    }
  };

  const results: string[][] = [];
  const visited = new Set<string>();
  for (const key of graph.keys()) {
    const emails: string[] = [];
    dfs(key, emails, visited);
    if (emails.length) results.push([nameMap.get(key)!, ...emails.sort()]);
  }

  return results;
};

// Using union find method
const accountsMerge2 = (accounts: string[][]): string[][] => {
  const parents: { [key: string]: string } = {};
  const emailNameMap: { [key: string]: string } = {};

  const find = (email: string): string => {
    if (parents[email] !== email) {
      parents[email] = find(parents[email]);
    }

    return parents[email];
  };

  const union = (a: string, b: string): void => {
    parents[find(b)] = find(a);
  };

  accounts.forEach(([name, ...emails]) => {
    emails.forEach((email) => {
      emailNameMap[email] = name;

      if (!parents[email]) {
        parents[email] = email;
      }

      union(email, emails[0]);
    });
  });

  const resultsMap: { [key: string]: string[] } = {};
  Object.keys(parents).forEach((parent) => {
    const root = find(parent);

    if (resultsMap[root]) {
      resultsMap[root].push(parent);
    } else {
      resultsMap[root] = [parent];
    }
  });

  return Object.entries(resultsMap).map(([root, email]) => {
    const name = emailNameMap[root];
    return [name, ...email.sort()];
  });
};

console.log(
  accountsMerge([
    ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
    ["John", "johnsmith@mail.com", "john00@mail.com"],
    ["Mary", "mary@mail.com"],
    ["John", "johnnybravo@mail.com"],
  ])
); //  [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
console.log(
  accountsMerge([
    ["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe1@m.co"],
    ["Kevin", "Kevin3@m.co", "Kevin5@m.co", "Kevin0@m.co"],
    ["Ethan", "Ethan5@m.co", "Ethan4@m.co", "Ethan0@m.co"],
    ["Hanzo", "Hanzo3@m.co", "Hanzo1@m.co", "Hanzo0@m.co"],
    ["Fern", "Fern5@m.co", "Fern1@m.co", "Fern0@m.co"],
  ])
); // [["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]]
