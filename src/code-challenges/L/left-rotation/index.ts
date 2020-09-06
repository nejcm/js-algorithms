export function rotLeft(a: number[], d: number): number[] {
  let k = d % a.length;
  while (k--) {
    a.push(a.shift() as number);
  }
  return a;
}
