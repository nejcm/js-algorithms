export function isInfiniteProcess(a: number, b: number): boolean {
  return a > b || (b - a) % 2 !== 0;
}
