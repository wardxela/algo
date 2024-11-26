export function solution(value: string): number {
  const info = value
    .split("\n")
    .map((line) => line.split(" "))
    .reduce<{ h: number; d: number; a: number }>(
      (acc, [command, arg]) => {
        switch (command) {
          case "forward": {
            const parsed = Number.parseInt(arg!);
            acc.h += parsed;
            acc.d += acc.a * parsed;
            break;
          }
          case "down": {
            acc.a += Number.parseInt(arg!);
            break;
          }
          case "up": {
            acc.a -= Number.parseInt(arg!);
            break;
          }
        }
        return acc;
      },
      { a: 0, h: 0, d: 0 },
    );
  return info.h * info.d;
}
