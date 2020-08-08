export function differentSquares(matrix: number[][]): number {
  const s: {[key: string]: boolean} = {};
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      s[
        `${matrix[i][j]},${matrix[i][j - 1]},${matrix[i - 1][j]},${matrix[i - 1][j - 1]}`
      ] = true;
    }
  }

  return Object.keys(s).length;
}

export function differentSquaresV2(matrix: number[][]): number {
  const s = new Set();
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[0].length - 1; j++) {
      const hash =
        matrix[i][j] +
        10 * matrix[i][j + 1] +
        100 * matrix[i + 1][j] +
        1000 * matrix[i + 1][j + 1];
      s.add(hash);
    }
  }
  return s.size;
}
