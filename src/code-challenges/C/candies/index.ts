export function candies(n: number, m: number): number {
  return m - (m % n);
}

export function candiesV2(n: number, m: number): number {
  return Math.floor(m / n) * n;
}
