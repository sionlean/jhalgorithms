// https://leetcode.com/problems/course-schedule/

const canFinish = (
  numCourses: number,
  prerequisites: number[][]
): boolean | void => {
  const visited: boolean[] = [];
  const visiting: boolean[] = [];
  const dependencyMap: { [key: number]: number[] } = {};

  prerequisites.forEach(([a, b]) => {
    if (dependencyMap[a]) {
      dependencyMap[a].push(b);
    } else {
      dependencyMap[a] = [b];
    }
  });

  const check = (course: number): boolean => {
    if (visited[course]) return true;
    if (visiting[course]) return false;
    visiting[course] = true;

    const dependencies = dependencyMap[course];
    if (dependencies) {
      for (const dependency of dependencies) {
        if (!check(dependency)) return false;
      }
    }

    visiting[course] = false;
    visited[course] = true;

    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!check(i)) return false;
  }

  return true;
};

const canFinish2 = (
  numCourses: number,
  prerequisites: number[][]
): boolean | void => {
  // 1. Create a graph
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  // 2. Create a visited array
  const visited: boolean[] = Array.from({ length: numCourses }, () => false);
  // 3. Create a visiting array
  const visiting: boolean[] = Array.from({ length: numCourses }, () => false);

  // 4. Loop through the prerequisites
  for (const [course, pre] of prerequisites) {
    // 5. Add the pre to the graph
    graph[pre].push(course);
  }

  // 6. Create a dfs function
  const dfs = (node: number): boolean => {
    // 7. If the node is visiting, return false
    if (visiting[node]) return false;
    // 8. If the node is visited, return true
    if (visited[node]) return true;

    // 9. Set the node to visiting
    visiting[node] = true;
    // 10. Loop through the graph
    for (const next of graph[node]) {
      //  11. If the dfs returns false, return false
      if (!dfs(next)) return false;
    }
    // 12. Set the node to visited
    visiting[node] = false;
    // 13. Set the node to visited
    visited[node] = true;

    // 14. Return true
    return true;
  };

  // 15. Loop through the numCourses
  for (let i = 0; i < numCourses; i++) {
    //  16. If the dfs returns false, return false
    if (!dfs(i)) return false;
  }
  //  17. Return true
  return true;
};

console.log(canFinish(2, [[1, 0]])); // true
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
); // false
