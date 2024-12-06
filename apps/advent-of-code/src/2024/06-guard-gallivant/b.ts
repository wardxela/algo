type Direction = "^" | ">" | "v" | "<";

interface Coords {
  i: number;
  j: number;
}

const directionsMap = {
  "^": { i: -1, j: 0 },
  ">": { i: 0, j: 1 },
  v: { i: 1, j: 0 },
  "<": { i: 0, j: -1 },
} satisfies Record<Direction, Coords>;

const rotateDirectionMap = {
  "^": ">",
  ">": "v",
  v: "<",
  "<": "^",
} satisfies Record<Direction, Direction>;

const obstacle = "#";

export function solution(value: string): number {
  const map = value.trim().split("\n");
  let detectedLoops = 0;
  const ignoreCoords: Coords = {
    i: 0,
    j: 0,
  };
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i]!.length; j++) {
      if (map[i]![j]! in directionsMap) {
        ignoreCoords.i = i;
        ignoreCoords.j = j;
        break;
      }
    }
  }
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i]!.length; j++) {
      if (ignoreCoords.i === i && ignoreCoords.j === j) {
        continue;
      }
      if (detectInfiniteLoop(map, { i, j })) {
        detectedLoops++;
      }
    }
  }
  return detectedLoops;
}

export function detectInfiniteLoop(
  map: string[],
  fakeObstacle: Coords,
): boolean {
  const coords: Coords = { i: 0, j: 0 };
  let currentDirection: Direction = "^";
  const seenObstacles = new Set<string>();
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i]!.length; j++) {
      if (map[i]![j]! in directionsMap) {
        coords.i = i;
        coords.j = j;
        currentDirection = map[i]![j]! as Direction;
        break;
      }
    }
  }
  while (true) {
    const nextI = coords.i + directionsMap[currentDirection].i;
    const nextJ = coords.j + directionsMap[currentDirection].j;
    if (
      nextI < 0 ||
      nextI >= map.length ||
      nextJ < 0 ||
      nextJ >= map[nextI]!.length
    ) {
      break;
    }
    if (
      map[nextI]![nextJ]! === obstacle ||
      (nextI === fakeObstacle.i && nextJ === fakeObstacle.j)
    ) {
      const key = serializeCoordsWithDirection(
        {
          i: nextI,
          j: nextJ,
        },
        currentDirection,
      );
      if (seenObstacles.has(key)) {
        return true;
      }
      seenObstacles.add(key);
      currentDirection = rotateDirectionMap[currentDirection];
    } else {
      coords.i = nextI;
      coords.j = nextJ;
    }
  }
  return false;
}

function serializeCoordsWithDirection(
  coord: Coords,
  direction: Direction,
): string {
  return `${direction}:${coord.i},${coord.j}`;
}
