// https://leetcode.com/problems/add-binary/

const addBinary = (a: string, b: string): string => {
  const lA = a.length;
  const lB = b.length;
  const maxLength = Math.max(lA, lB);
  let overflow = false;
  let results: number[] = [];

  for (let i = 0; i < maxLength; i++) {
    const numA = +a[lA - i - 1] || 0;
    const numB = +b[lB - i - 1] || 0;
    const result: number = overflow ? numA + numB + 1 : numA + numB;
    overflow = result > 1;
    results.push(result % 2);
  }

  if (overflow) results.push(1);
  return results.reverse().join("");
};

// Method using BigInt
const addBinaryWithBigInt = (a: string, b: string): string => {
  const sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
  return sum.toString(2);
};

// This will overflow
// const addBinary = (a: string, b: string): string => {
//   return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
// };

console.log(addBinary("11", "1")); // "100"
console.log(addBinary("1010", "1011")); // "10101"
