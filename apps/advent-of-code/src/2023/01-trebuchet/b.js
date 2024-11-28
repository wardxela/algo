import { readFileSync } from "node:fs";

const input = readFileSync("./input.txt").toString();

const DIGITS_MAP = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const REVERSED_DIGITS_MAP = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  eno: 1,
  owt: 2,
  eerht: 3,
  ruof: 4,
  evif: 5,
  xis: 6,
  neves: 7,
  thgie: 8,
  enin: 9,
};

const output = input
  .split("\n")
  .map((line) => {
    const first =
      DIGITS_MAP[
        line.match(/\d|one|two|three|four|five|six|seven|eight|nine/).at(0)
      ];
    const last =
      REVERSED_DIGITS_MAP[
        [...line]
          .reverse()
          .join("")
          .match(/\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/)
          .at(0)
      ];
    return first * 10 + last;
  })
  .reduce((sum, current) => sum + current, 0);

console.log(output);
