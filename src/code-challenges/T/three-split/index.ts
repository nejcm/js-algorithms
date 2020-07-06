export function threeSplit(a: number[]): number {
  const limit = a.reduce((s, c) => s + c, 0) / 3;
  let c = 0;
  let total = 0;
  for (let i = 1; i < a.length - 1; i++) {
    a[i] += a[i - 1];
    if (a[i - 1] === limit) c++;
    if (a[i] === limit * 2) total += c;
  }
  return total;
}
