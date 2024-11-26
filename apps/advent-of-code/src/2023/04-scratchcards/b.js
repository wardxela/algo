import { readFileSync } from "fs";

const input = readFileSync("./input.txt").toString();

const subResult = input
  .split("\n")
  .map((card) => {
    return card
      .match(/Card\W+\d+:\W+([\d\W]+) \| ([\d\W]+)/)
      .slice(1, 3)
      .map((digits) => digits.split(/\W+/).map(Number));
  })
  .map(([winningNumbers, myNumbers]) => {
    const memo = new Set(winningNumbers);
    const count = myNumbers.reduce((c, value) => {
      return memo.has(value) ? c + 1 : c;
    }, 0);
    return count;
  });

const result = subResult
  .reduce(
    (counts, winCount, i) => {
      for (let j = 1; j <= winCount && i + j < counts.length; j++) {
        counts[i + j] += counts[i];
      }
      return counts;
    },
    subResult.map(() => 1),
  )
  .reduce((a, b) => a + b);
console.log(result);
