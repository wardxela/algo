export function solution(value: string): number {
  const [rules, updates] = value.trim().split("\n\n");
  const rulesMap = new Map<number, Set<number>>();
  for (const rule of rules!.split("\n")) {
    const [a, b] = rule.split("|").map((raw) => Number.parseInt(raw)) as [
      number,
      number,
    ];
    const set = rulesMap.get(a) ?? new Set();
    set.add(b);
    rulesMap.set(a, set);
  }
  let acc = 0;
  updatesLoop: for (const update of updates!.split("\n")) {
    const numbers = update.split(",").map((raw) => Number.parseInt(raw));
    for (let i = 1; i < numbers.length; i++) {
      const ruleSet = rulesMap.get(numbers[i]!);
      if (!ruleSet) {
        continue;
      }
      for (let j = 0; j < i; j++) {
        if (ruleSet.has(numbers[j]!)) {
          continue updatesLoop;
        }
      }
    }
    acc += numbers[(numbers.length - 1) / 2]!;
  }
  return acc;
}
