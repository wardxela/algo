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

  sortNumberArrayAscending(leftList);
  sortNumberArrayAscending(rightList);

  return leftList.reduce((acc, current, index) => {
    return acc + Math.abs(current - rightList[index]!);
  }, 0);
}

function sortNumberArrayAscending(list: number[]): number[] {
  return list.sort((a, b) => a - b);
}
