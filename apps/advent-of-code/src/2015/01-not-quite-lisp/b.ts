export function solution(value: string): number {
  let result = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] === "(") {
      result++;
    } else if (value[i] === ")") {
      result--;
    }
    if (result === -1) {
      return i + 1;
    }
  }
  // Never
  return -1;
}
