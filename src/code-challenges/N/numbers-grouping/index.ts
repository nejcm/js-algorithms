export function numbersGrouping(a: number[]): number {
  return new Set(a.map((x) => Math.ceil(x / 10000))).size + a.length;
}
