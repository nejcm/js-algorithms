export function rounders(n: number): number {
  let d = 10;
  while (d < n) {
    const a = n % d;
    n = (a > 4 * (d / 10) ? n + d : n) - a;
    d *= 10;
  }
  return n;
}

export function roundersV2(n: number): number {
  let r = 0;
  while (n > 10) {
    n = Math.round(n / 10);
    r++;
  }
  return n * 10 ** r;
}
