export function solution(value: string): number {
  let result = 0;
  for (const char of value) {
    if (char === "(") {
      result++;
    } else if (char === ")") {
      result--;
    }
  }
  return result;
}
