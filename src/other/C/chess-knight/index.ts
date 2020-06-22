export function chessKnight(cell: string): number {
  const pos = [
    [-2, -1],
    [-1, -2],
    [-2, 1],
    [-1, 2],
    [2, -1],
    [1, -2],
    [1, 2],
    [2, 1],
  ];
  const c1 = cell.charCodeAt(0) - 97;
  const c2 = Number(cell[1]) - 1;
  return pos.reduce(
    (acc, p) =>
      acc +
      (c1 + p[0] >= 0 && c1 + p[0] < 8 && c2 + p[1] >= 0 && c2 + p[1] < 8
        ? 1
        : 0),
    0,
  );
}
