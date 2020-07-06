export function weakNumbers(n: number): number[] {
  const divisors = (v: number): number =>
    Array(v)
      .fill(0)
      .reduce((a, _c, i) => (v % (i + 1) ? a : a + 1), 0);

  const result = [-1, -1];
  for (let i = 1; i <= n; i++) {
    const d = divisors(i);
    let c = 0;
    for (let j = 1; j < i; j++) {
      const sd = divisors(j);
      if (sd > d) c++;
    }
    if (result[0] === c) result[1]++;
    if (result[0] < c) {
      result[0] = c;
      result[1] = 1;
    }
  }
  return result;
}
