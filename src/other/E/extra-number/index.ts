export function extraNumber(a: number, b: number, c: number): number {
  if (a === b) return c;
  if (a === c) return b;
  return a;
}
