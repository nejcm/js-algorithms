export function sudoku(grid: number[][]): boolean {
  for (let i = 0; i < 9; i++) {
    const v: {[key: string]: boolean} = {};
    const h: {[key: string]: boolean} = {};
    const s: {[key: string]: boolean} = {};
    for (let j = 0; j < 9; j++) {
      const c1 = (i % 3) * 3 + Math.floor(j / 3);
      const c2 = (i % 3) * 3 + (j % 3);
      if (h[grid[i][j]] || v[grid[j][i]] || s[grid[c1][c2]]) {
        return false;
      }
      h[grid[i][j]] = true;
      v[grid[j][i]] = true;
      s[grid[c1][c2]] = true;
    }
  }
  return true;
}

export function sudokuV2(grid: number[][]): boolean {
  const prod = (arr: number[]): boolean => arr.reduce((a, c) => a * c, 1) === 362880; // product of numbers

  return grid.every(
    (r, i) =>
      prod(r) &&
      prod(grid.map((x) => x[i])) &&
      prod(
        r.map((_, j) => grid[3 * ((i / 3) | 0) + ((j / 3) | 0)][3 * (i % 3) + (j % 3)]),
      ),
  );
}
