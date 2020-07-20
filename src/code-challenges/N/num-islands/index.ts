export function numIslands(grid: string[][]): number {
  if (grid === null || grid.length === 0 || grid[0].length === 0) return 0;

  const rowLen = grid.length;
  const colLen = grid[0].length;

  const removeIsland = (i: number, j: number): void => {
    if (i < 0 || j < 0 || i >= rowLen || j >= colLen || grid[i][j] === '0') return;

    grid[i][j] = '0';
    removeIsland(i - 1, j);
    removeIsland(i + 1, j);
    removeIsland(i, j - 1);
    removeIsland(i, j + 1);
  };

  let count = 0;
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] === '1') {
        count++;
        removeIsland(i, j);
      }
    }
  }
  return count;
}
