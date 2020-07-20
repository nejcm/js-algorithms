export function generate(numRows: number): number[][] {
  if (numRows <= 0) return [];
  const result: number[][] = [[1]];

  for (let i = 1; i < numRows; i++) {
    const curr = [1];
    for (let j = 1; j < i; j++) {
      curr.push(result[i - 1][j - 1] + result[i - 1][j]);
    }
    curr.push(1);
    result.push(curr);
  }
  return result;
}
