export function matrixElementsSum(matrix: number[][]): number {
  let sum = 0;
  const vLen = matrix.length;
  const hLen = matrix[0].length;
  for (let i = 0; i < hLen; i++) {
    for (let j = 0; j < vLen; j++) {
      if (matrix[j][i] === 0) break;
      sum += matrix[j][i];
    }
  }
  return sum;
}
