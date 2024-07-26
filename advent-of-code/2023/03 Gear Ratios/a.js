import { readFileSync } from 'fs';

const input = readFileSync('./input.txt').toString();

// Parsing
const table = input.split('\n').map((row) => {
  const data = {};
  let currentRef = { current: '' };
  for (const [charIndex, char] of Object.entries(row)) {
    if (!/\d/.test(char)) {
      currentRef = { current: '' };
      continue;
    }
    currentRef.current += char;
    data[charIndex] = currentRef;
  }
  return data;
}, {});

const memo = new Set();

input.split('\n').forEach((row, rowI) =>
  row.split('').forEach((ch, chI) => {
    if (/\d|\./.test(ch)) {
      return;
    }
    if (table[rowI - 1][chI - 1]?.current) {
      memo.add(table[rowI - 1][chI - 1]);
    }
    if (table[rowI - 1][chI]?.current) {
      memo.add(table[rowI - 1][chI]);
    }
    if (table[rowI - 1][chI + 1]?.current) {
      memo.add(table[rowI - 1][chI + 1]);
    }
    if (table[rowI][chI - 1]?.current) {
      memo.add(table[rowI][chI - 1]);
    }
    if (table[rowI][chI + 1]?.current) {
      memo.add(table[rowI][chI + 1]);
    }
    if (table[rowI + 1][chI - 1]?.current) {
      memo.add(table[rowI + 1][chI - 1]);
    }
    if (table[rowI + 1][chI]?.current) {
      memo.add(table[rowI + 1][chI]);
    }
    if (table[rowI + 1][chI + 1]?.current) {
      memo.add(table[rowI + 1][chI + 1]);
    }
  })
);

const result = [...memo]
  .map((number) => +number.current)
  .reduce((a, b) => a + b);

console.log(result);
