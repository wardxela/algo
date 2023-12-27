import { readFileSync } from 'fs';
import { inspect } from 'util';

const input = readFileSync('./input.txt').toString();

const gamePattern = /Game (\d+): (.+)/;
const cubePattern = /(\d+) ([a-z]+)/;

// only 12 red cubes, 13 green cubes, and 14 blue cubes
const bag = {
  red: 12,
  green: 13,
  blue: 14,
};

const result = input
  .split('\n')
  .map((line) => {
    const [_, id, statistics] = line.match(gamePattern);
    return {
      id: +id,
      rounds: statistics.split(';').map((round) =>
        round.split(',').map((cube) => {
          const [_, count, name] = cube.match(cubePattern);
          return { name, count: +count };
        })
      ),
    };
  })
  .filter((game) =>
    game.rounds.every((round) =>
      round.every((cube) => cube.count <= bag[cube.name])
    )
  )
  .map((game) => game.id)
  .reduce((a, b) => a + b);

// console.log(inspect(result, { showHidden: false, depth: null, colors: true }));
console.log(result);
