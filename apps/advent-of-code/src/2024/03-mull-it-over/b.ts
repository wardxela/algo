const doDontRegExp = /do\(\)(.+?)don't\(\)/gs;
const mulRegExp = /mul\((\d+),(\d+)\)/g;

export function solution(value: string): number {
  const enabledMatches = `do()${value}don't()`.matchAll(doDontRegExp);
  let result = 0;
  for (const enabled of enabledMatches) {
    const matches = enabled[1]!.matchAll(mulRegExp);
    for (const match of matches) {
      result += Number.parseInt(match[1]!) * Number.parseInt(match[2]!);
    }
  }
  return result;
}
