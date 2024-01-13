// https://leetcode.com/problems/clone-graph/

class Node1 {
  val: number;
  neighbors: Node1[];
  constructor(val?: number, neighbors?: Node1[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

const cloneGraph = (node: Node1): Node1 | null => {
  if (!node) return null;
  const nodeMap: { [value: number]: Node1 } = {};

  return recurse(node, nodeMap);
};

const recurse = (node: Node1, nodeMap: { [value: number]: Node1 }): Node1 => {
  const newNode = new Node1(node.val);
  nodeMap[node.val] = newNode;
  const neighbors = node.neighbors;
  neighbors.forEach((neighbor) => {
    if (nodeMap[neighbor.val]) {
      newNode.neighbors.push(nodeMap[neighbor.val]);
    } else {
      const newNeighbour = recurse(neighbor, nodeMap);
      newNode.neighbors.push(newNeighbour);
    }
  });

  return newNode;
};

// Refer to leetcode for test cases
// Example 1
// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]
// Explanation: There are 4 nodes in the graph.
// Each node has a label in the set {1, 2, 3, 4}.
// The graph is shown above.
// Example 2
// Input: adjList = [[]]
