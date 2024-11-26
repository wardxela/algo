export function solution(value: string): number {
  const lines = value.split('\n')

  const oxygenGeneratorRating = computeRating(lines, 'most')
  const CO2ScrubberRating = computeRating(lines, 'least')

  return oxygenGeneratorRating * CO2ScrubberRating
}

function computeRating(binaries: string[], criteria: 'most' | 'least'): number {
  let i = 0

  while (binaries.length > 1) {
    const { withOnes, withZeros } = binaries.reduce((acc, line) => {
      if (line[i] === '1') {
        acc.withOnes.push(line)
      } else {
        acc.withZeros.push(line)
      }
      return acc
    }, {withZeros: [] as string[], withOnes: [] as string[]})
    if (criteria === 'most') {
      if (withOnes.length >= withZeros.length) {
        binaries = withOnes
      } else {
        binaries = withZeros
      }
    } else {
      if (withZeros.length <= withOnes.length) {
        binaries = withZeros
      } else {
        binaries = withOnes
      }
    }
    i++
  }

  return parseInt(binaries[0]!, 2)
}