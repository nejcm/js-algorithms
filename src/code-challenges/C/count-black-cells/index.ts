export function countBlackCells(n: number, m: number): number {
  const gcd = (a: number, b: number): number => {
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  };
  return n + m + gcd(n, m) - 2;
}

export function countBlackCellsV2(n: number, m: number): number {
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  return n + m + gcd(n, m) - 2;
}
