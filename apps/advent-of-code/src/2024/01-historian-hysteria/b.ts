export function solution(value: string): number {
  const lines = value.trim().split("\n");
  const leftList: number[] = [];
  const rightList: number[] = [];

  for (const line of lines) {
    const match = line.match(/^(\d+)\s+(\d+)$/);
    const first = Number.parseInt(match![1]!);
    const second = Number.parseInt(match![2]!);
    leftList.push(first);
    rightList.push(second);
  }

  const rightListOccurrencesMap = rightList.reduce((acc, current) => {
    if (acc.has(current)) {
      acc.set(current, acc.get(current)! + 1);
    } else {
      acc.set(current, 1);
    }
    return acc;
  }, new Map<number, number>());

  return leftList.reduce((acc, current) => {
    if (rightListOccurrencesMap.has(current)) {
      const count = rightListOccurrencesMap.get(current)!;
      return acc + current * count;
    }
    return acc;
  }, 0);
}
