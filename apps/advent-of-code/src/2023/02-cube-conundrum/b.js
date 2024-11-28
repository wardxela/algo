import { readFileSync } from "node:fs";

const input = readFileSync("./input.txt").toString();

const gamePattern = /Game (\d+): (.+)/;
const cubePattern = /(\d+) ([a-z]+)/;

const result = input
  .split("\n")
  .map((line) => {
    const [_, id, statistics] = line.match(gamePattern);
    return {
      id: +id,
      rounds: statistics.split(";").map((round) =>
        round.split(",").map((cube) => {
          const [_, count, name] = cube.match(cubePattern);
          return { name, count: +count };
        }),
      ),
    };
  })
  .map((game) => {
    const minBag = game.rounds.reduce(
      (minBag, round) => {
        const roundCubes = round.reduce(
          (cubes, cube) => {
            cubes[cube.name] = cube.count;
            return cubes;
          },
          { red: 0, green: 0, blue: 0 },
        );
        if (minBag.red < roundCubes.red) {
          minBag.red = roundCubes.red;
        }
        if (minBag.green < roundCubes.green) {
          minBag.green = roundCubes.green;
        }
        if (minBag.blue < roundCubes.blue) {
          minBag.blue = roundCubes.blue;
        }
        return minBag;
      },
      { red: 0, green: 0, blue: 0 },
    );
    return minBag.red * minBag.green * minBag.blue;
  })
  .reduce((a, b) => a + b);

// console.log(inspect(result, { showHidden: false, depth: null, colors: true }));
console.log(result);
