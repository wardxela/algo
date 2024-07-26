import { readFileSync } from 'fs';

const input = readFileSync('./input.txt').toString();

const result = input
  .split('\n')
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
    return count < 2 ? count : 2 ** (count - 1);
  })
  .reduce((a, b) => a + b);

console.log(result);
