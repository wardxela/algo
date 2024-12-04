export function solution(value: string): number {
  const matrix = value.trim().split("\n");
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i]!.length; j++) {
      if (matrix[i]![j] !== "A") {
        continue;
      }
      if (
        ((matrix[i - 1]?.[j - 1] === "M" && matrix[i + 1]?.[j + 1] === "S") ||
          (matrix[i - 1]?.[j - 1] === "S" && matrix[i + 1]?.[j + 1] === "M")) &&
        ((matrix[i - 1]?.[j + 1] === "M" && matrix[i + 1]?.[j - 1] === "S") ||
          (matrix[i - 1]?.[j + 1] === "S" && matrix[i + 1]?.[j - 1] === "M"))
      ) {
        result++;
      }
    }
  }
  return result;
}
