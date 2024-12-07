const equationRegExp = /^(\d+):([\d\s]+)/;

export function solution(value: string): number {
  const equations = value.trim().split("\n");
  let calibrationResult = 0;
  for (const equation of equations) {
    const match = equation.match(equationRegExp);
    if (!match) {
      continue;
    }
    const expected = Number.parseInt(match[1]!);
    const operands = match[2]!
      .trim()
      .split(/\s/)
      .map((value) => Number.parseInt(value));
    if (isEquationSolvable(operands[0]!, operands.slice(1), expected)) {
      calibrationResult += expected;
    }
  }
  return calibrationResult;
}

function isEquationSolvable(
  operand: number,
  operands: number[],
  expected: number,
): boolean {
  if (!operands.length) {
    return operand === expected;
  }
  const rightOperand = operands[0]!;
  const restOperands = operands.slice(1);
  return (
    isEquationSolvable(operand + rightOperand, restOperands, expected) ||
    isEquationSolvable(operand * rightOperand, restOperands, expected)
  );
}
