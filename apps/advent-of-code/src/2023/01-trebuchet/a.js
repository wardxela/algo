import { readFileSync } from "node:fs";

const input = readFileSync("./input.txt").toString();

const output = input
  .split("\n")
  .map((line) =>
    Array.from(line).reduce(
      (result, value) => {
        const n = +value;
        if (!Number.isNaN(n)) {
          if (result.first === null) {
            result.first = n;
          }
          result.last = n;
        }
        return result;
      },
      { first: null, last: null },
    ),
  )
  .reduce((sum, current) => sum + current.first * 10 + current.last, 0);

console.log(output);
