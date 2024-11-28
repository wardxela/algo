export function solution(value: string): number {
  return value
    .trim()
    .split("\n")
    .reduce((acc, line) => acc + calcWrappingPaper(line), 0);
}

const pattern = /(\d+)x(\d+)x(\d+)/;

export function calcWrappingPaper(value: string): number {
  const match = value.match(pattern)!;
  const length = Number.parseInt(match[1]!);
  const width = Number.parseInt(match[2]!);
  const height = Number.parseInt(match[3]!);

  const firstSide = length * width;
  const secondSide = length * height;
  const thirdSide = width * height;

  const minSide = Math.min(firstSide, secondSide, thirdSide);

  const surface = firstSide * 2 + secondSide * 2 + thirdSide * 2;

  return surface + minSide;
}
