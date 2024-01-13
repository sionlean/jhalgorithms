// https://leetcode.com/problems/time-based-key-value-store/

class TimeMap {
  private valueMap = new Map<string, { value: string; timestamp: number }[]>();

  set(key: string, value: string, timestamp: number): void {
    if (!this.valueMap.has(key)) {
      this.valueMap.set(key, []);
    }

    this.valueMap.get(key)!.push({ value, timestamp });
  }

  get(key: string, timestamp: number): string {
    if (this.valueMap.has(key)) {
      const node = this.getNode(this.valueMap.get(key)!, timestamp);
      return node ? node.value : "";
    }

    return "";
  }

  getNode = (
    arr: { value: string; timestamp: number }[],
    target: number
  ): { value: string; timestamp: number } | null => {
    let start = 0;
    let end = arr.length - 1;

    if (arr[end].timestamp <= target) return arr[end];
    if (arr[start].timestamp > target) return null;

    while (end - start > 1) {
      const mid = Math.floor(start + (end - start) / 2);

      if (arr[mid].timestamp <= target) {
        start = mid;
      } else {
        end = mid;
      }
    }

    return arr[start];
  };
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

// Input
// ["TimeMap", "set", "get", "get", "set", "get", "get"]
// [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
// Output
// [null, null, "bar", "bar", null, "bar2", "bar2"]

// Explanation
// TimeMap timeMap = new TimeMap();
// timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
// timeMap.get("foo", 1);         // return "bar"
// timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
// timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
// timeMap.get("foo", 4);         // return "bar2"
// timeMap.get("foo", 5);         // return "bar2"
