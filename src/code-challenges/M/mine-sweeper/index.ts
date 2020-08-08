export function minesweeper(matrix: number[][]): number[][] {
  const area = [
    [0, 1],
    [0, -1],
    [1, 0],
    [1, -1],
    [1, 1],
    [-1, 0],
    [-1, 1],
    [-1, -1],
  ];
  return matrix.map((row, i) =>
    row.map((_, j) =>
      area.reduce(
        (acc, val) =>
          (acc += !(matrix[i + val[0]] && matrix[i + val[0]][j + val[1]]) ? 0 : 1),
        0,
      ),
    ),
  );
}
