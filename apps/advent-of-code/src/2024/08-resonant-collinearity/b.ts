export function solution(value: string): number {
  const map = value.trim().split("\n");
  const antinodesSet = new Set<string>();
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i]!.length; j++) {
      if (!/\w/i.test(map[i]![j]!)) {
        continue;
      }
      for (let i2 = i; i2 < map.length; i2++) {
        for (let j2 = 0; j2 < map[i]!.length; j2++) {
          if (i2 === i && j2 === j) {
            continue;
          }
          if (map[i2]![j2] !== map[i]![j]!) {
            continue;
          }
          let firstAntnodeI = i2;
          let firstAntnodeJ = j2;
          while (isWithinBounds(firstAntnodeI, firstAntnodeJ, map)) {
            antinodesSet.add(serializeCoords(firstAntnodeI, firstAntnodeJ));
            firstAntnodeI += i2 - i;
            firstAntnodeJ += j2 - j;
          }
          let secondAntnodeI = i;
          let secondAntnodeJ = j;
          while (isWithinBounds(secondAntnodeI, secondAntnodeJ, map)) {
            antinodesSet.add(serializeCoords(secondAntnodeI, secondAntnodeJ));
            secondAntnodeI += i - i2;
            secondAntnodeJ += j - j2;
          }
        }
      }
    }
  }
  return antinodesSet.size;
}

function isWithinBounds(i: number, j: number, map: string[]): boolean {
  return i >= 0 && i < map.length && j >= 0 && j < map[i]!.length;
}

function serializeCoords(a: number, b: number): string {
  return `${a},${b}`;
}

function deserializeCoords(a: string): [number, number] {
  return a.split(",").map(Number) as [number, number];
}
