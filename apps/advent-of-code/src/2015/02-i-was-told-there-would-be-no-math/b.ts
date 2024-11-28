export function solution(value: string): number {
  return value
    .trim()
    .split("\n")
    .reduce((acc, line) => acc + calcWrappingRibbon(line), 0);
}

const pattern = /(\d+)x(\d+)x(\d+)/;

export function calcWrappingRibbon(value: string): number {
  const match = value.match(pattern)!;
  const length = Number.parseInt(match[1]!);
  const width = Number.parseInt(match[2]!);
  const height = Number.parseInt(match[3]!);

  const firstPermiter = (length + width) * 2;
  const secondPermiter = (length + height) * 2;
  const thirdPermiter = (width + height) * 2;

  const smallestPerimiter = Math.min(
    firstPermiter,
    secondPermiter,
    thirdPermiter,
  );

  const bow = length * width * height;

  return smallestPerimiter + bow;
}
