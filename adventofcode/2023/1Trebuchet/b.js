import { readFileSync } from 'fs';

const input = readFileSync('./input.txt').toString();

const DIGITS_MAP = {
  0: 0,
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

const output = input
  .split('\n')
  .map(line => {
    const digits = Array.from(
      line.matchAll(/\d|one|two|three|four|five|six|seven|eight|nine/g)
    );
    return (
      DIGITS_MAP[digits.at(0).at(0)] * 10 + DIGITS_MAP[digits.at(-1).at(0)]
    );
  })
  .reduce((sum, current) => sum + current);

console.log(output);
