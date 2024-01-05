import { readFileSync } from 'fs';

const input = readFileSync('./input.txt').toString();

const result = input
  .split('\n\n')
  .map((line) => line.split(':')[1].split(/\W/).slice(1).map(Number));

console.log(result);
