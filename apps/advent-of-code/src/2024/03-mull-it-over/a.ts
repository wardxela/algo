const mulRegExp = /mul\((\d+),(\d+)\)/g;

export function solution(value: string): number {
  const matches = value.matchAll(mulRegExp);
  let result = 0;
  for (const match of matches) {
    result += Number.parseInt(match[1]!) * Number.parseInt(match[2]!);
  }
  return result;
}
