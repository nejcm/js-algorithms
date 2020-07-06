export function magicalWell(a: number, b: number, n: number): number {
  return Array(n)
    .fill(0)
    .reduce((ac, _c, i) => ac + (a + i) * (b + i), 0);
}

export function magicalWellV2(a: number, b: number, n: number): number {
  return n * (a * b + ((n - 1) * (2 * n - 1 + 3 * (a + b))) / 6);
}

export function magicalWellV3(a: number, b: number, n: number): number {
  return n != 0 ? a * b + magicalWell(++a, ++b, --n) : 0;
}
