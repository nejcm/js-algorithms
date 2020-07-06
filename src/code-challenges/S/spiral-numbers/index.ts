export function spiralNumbers(n: number): number[][] {
  const moves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const spiral = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));
  const getNext = (curr: number[], move: number): number[] | null => {
    const c1 = curr[0] + moves[move % 4][0];
    const c2 = curr[1] + moves[move % 4][1];
    if (c1 < 0 || c1 >= n || c2 < 0 || c2 >= n || spiral[c1][c2] > 0) {
      return null;
    }
    return [c1, c2];
  };

  let i = 2;
  spiral[0][0] = 1;
  let curr = [0, 0];
  let move = 0;
  while (i <= n * n) {
    const next = getNext(curr, move);
    if (next) {
      spiral[next[0]][next[1]] = i;
      curr = next;
      i++;
    } else {
      move++;
    }
  }
  return spiral;
}

export function spiralNumbersV2(n: number): number[][] {
  const matrix = [...Array(n)].map((_) => Array(n));
  let x = 0;
  let y = 0;
  let dir = 2;
  let size = n;
  let c = 0;
  for (let i = 1; i <= n * n; i++) {
    matrix[y][x] = i;
    if (++c === size) {
      dir = (dir + 1) % 4;
      size -= dir % 2;
      c = 0;
    }
    if (dir % 2 === 0) x += dir > 1 ? 1 : -1;
    else y += dir > 1 ? 1 : -1;
  }
  return matrix;
}
