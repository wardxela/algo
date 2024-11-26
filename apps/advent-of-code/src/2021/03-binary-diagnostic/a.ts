export function solution(value: string): number {
  const lines = value.split('\n')
  const mask = parseInt('1'.repeat(lines[0]!.length), 2)
  const stats = lines.reduce((acc, line) => {
    for (let i = 0; i < lines[0]!.length; i++) {
      if (line[i] === '1') {
        acc[i]!.ones++
      } else {
        acc[i]!.zeros++
      }
    }
    return acc
  }, Array(lines[0]!.length).fill(0).map(() => ({ones: 0, zeros: 0})))
  const gammaRate = parseInt(stats.map(value => value.ones > value.zeros ? '1' : '0').join(''), 2)
  const epsilonRate = gammaRate ^ mask
  return gammaRate * epsilonRate
}