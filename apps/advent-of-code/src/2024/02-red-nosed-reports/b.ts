export function solution(value: string): number {
  const reports = value
    .trim()
    .split("\n")
    .map((report) => report.split(" ").map((level) => Number.parseInt(level)));

  let safeReports = 0;
  for (const report of reports) {
    const variants = report.map((_, i) => report.filter((_, j) => i !== j));
    for (const variant of variants) {
      if (isReportSafe(variant)) {
        safeReports++;
        break;
      }
    }
  }

  return safeReports;
}

function isReportSafe(report: number[]): boolean {
  const firstDiff = report[1]! - report[0]!;
  if (!isRangeSafe(firstDiff)) {
    return false;
  }
  const isInc = firstDiff > 0;
  for (let i = 1; i < report.length - 1; i++) {
    const diff = report[i + 1]! - report[i]!;
    if (!isRangeSafe(diff)) {
      return false;
    }
    if ((isInc && diff < 0) || (!isInc && diff > 0)) {
      return false;
    }
  }
  return true;
}

function isRangeSafe(range: number): boolean {
  const absRange = Math.abs(range);
  return absRange >= 1 && absRange <= 3;
}
