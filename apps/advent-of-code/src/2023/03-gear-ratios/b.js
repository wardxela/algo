import { readFileSync } from "fs";

const input = readFileSync("./input.txt").toString();

// Parsing
const table = input.split("\n").map((row) => {
  const data = {};
  let currentRef = { current: "" };
  for (const [charIndex, char] of Object.entries(row)) {
    if (!/\d/.test(char)) {
      currentRef = { current: "" };
      continue;
    }
    currentRef.current += char;
    data[charIndex] = currentRef;
  }
  return data;
}, {});

const result = input.split("\n").reduce((globalSum, row, rowI) => {
  return (
    globalSum +
    row.split("").reduce((sum, ch, chI) => {
      if (!/\*/.test(ch)) {
        return sum;
      }
      const memo = [
        ...new Set([
          table[rowI - 1][chI - 1]?.current,
          table[rowI - 1][chI]?.current,
          table[rowI - 1][chI + 1]?.current,
          table[rowI][chI - 1]?.current,
          table[rowI][chI + 1]?.current,
          table[rowI + 1][chI - 1]?.current,
          table[rowI + 1][chI]?.current,
          table[rowI + 1][chI + 1]?.current,
        ]),
      ].filter((v) => v !== undefined);

      return sum + (memo.length === 2 ? memo.reduce((prod, v) => prod * v) : 0);
    }, 0)
  );
}, 0);

console.log(result);
