export function solution(value: string): number {
  const info = value
    .split("\n")
    .map((line) => line.split(" "))
    .reduce<{ h: number; d: number }>(
      (acc, [command, arg]) => {
        switch (command) {
          case "forward": {
            acc.h += Number.parseInt(arg!);
            break;
          }
          case "down": {
            acc.d += Number.parseInt(arg!);
            break;
          }
          case "up": {
            acc.d -= Number.parseInt(arg!);
            break;
          }
        }
        return acc;
      },
      { h: 0, d: 0 },
    );
  return info.h * info.d;
}
