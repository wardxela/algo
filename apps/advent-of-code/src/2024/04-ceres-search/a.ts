export function solution(value: string): number {
  const matrix = value.trim().split("\n");
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i]!.length; j++) {
      if (
        matrix[i]?.[j] === "X" &&
        matrix[i]?.[j - 1] === "M" &&
        matrix[i]?.[j - 2] === "A" &&
        matrix[i]?.[j - 3] === "S"
      ) {
        result++;
      }
      if (
        matrix[i]?.[j] === "X" &&
        matrix[i + 1]?.[j - 1] === "M" &&
        matrix[i + 2]?.[j - 2] === "A" &&
        matrix[i + 3]?.[j - 3] === "S"
      ) {
        result++;
      }
      if (
        matrix[i]?.[j] === "X" &&
        matrix[i + 1]?.[j] === "M" &&
        matrix[i + 2]?.[j] === "A" &&
        matrix[i + 3]?.[j] === "S"
      ) {
        result++;
      }
      if (
        matrix[i]?.[j]! === "X" &&
        matrix[i + 1]?.[j + 1] === "M" &&
        matrix[i + 2]?.[j + 2] === "A" &&
        matrix[i + 3]?.[j + 3] === "S"
      ) {
        result++;
      }
      if (
        matrix[i]?.[j]! === "X" &&
        matrix[i]?.[j + 1] === "M" &&
        matrix[i]?.[j + 2] === "A" &&
        matrix[i]?.[j + 3] === "S"
      ) {
        result++;
      }
      if (
        matrix[i]?.[j]! === "X" &&
        matrix[i - 1]?.[j + 1] === "M" &&
        matrix[i - 2]?.[j + 2] === "A" &&
        matrix[i - 3]?.[j + 3] === "S"
      ) {
        result++;
      }
      if (
        matrix[i]?.[j]! === "X" &&
        matrix[i - 1]?.[j] === "M" &&
        matrix[i - 2]?.[j] === "A" &&
        matrix[i - 3]?.[j] === "S"
      ) {
        result++;
      }
      if (
        matrix[i]?.[j]! === "X" &&
        matrix[i - 1]?.[j - 1] === "M" &&
        matrix[i - 2]?.[j - 2] === "A" &&
        matrix[i - 3]?.[j - 3] === "S"
      ) {
        result++;
      }
    }
  }
  return result;
}
