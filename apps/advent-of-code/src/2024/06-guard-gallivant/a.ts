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
  const coords: Coords = { i: 0, j: 0 };
  let currentDirection: Direction = "^";
  const visitedCoordsSet = new Set<string>();
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i]!.length; j++) {
      if (map[i]![j]! in directionsMap) {
        coords.i = i;
        coords.j = j;
        currentDirection = map[i]![j]! as Direction;
        visitedCoordsSet.add(serializeCoords(coords));
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
    if (map[nextI]![nextJ]! === obstacle) {
      currentDirection = rotateDirectionMap[currentDirection];
    } else {
      coords.i = nextI;
      coords.j = nextJ;
      visitedCoordsSet.add(serializeCoords(coords));
    }
  }
  return visitedCoordsSet.size;
}

function serializeCoords(coord: Coords): string {
  return `${coord.i},${coord.j}`;
}
