export function solution(value: string): number {
  const lines = value.split("\n");

  const oxygenGeneratorRating = computeRating(lines, "most");
  const CO2ScrubberRating = computeRating(lines, "least");

  return oxygenGeneratorRating * CO2ScrubberRating;
}

function computeRating(binaries: string[], criteria: "most" | "least"): number {
  let i = 0;
  let currentBinaries = binaries;

  while (currentBinaries.length > 1) {
    const { withOnes, withZeros } = currentBinaries.reduce(
      (acc, line) => {
        if (line[i] === "1") {
          acc.withOnes.push(line);
        } else {
          acc.withZeros.push(line);
        }
        return acc;
      },
      { withZeros: [] as string[], withOnes: [] as string[] },
    );
    if (criteria === "most") {
      if (withOnes.length >= withZeros.length) {
        currentBinaries = withOnes;
      } else {
        currentBinaries = withZeros;
      }
    } else {
      if (withZeros.length <= withOnes.length) {
        currentBinaries = withZeros;
      } else {
        currentBinaries = withOnes;
      }
    }
    i++;
  }

  return Number.parseInt(currentBinaries[0]!, 2);
}
