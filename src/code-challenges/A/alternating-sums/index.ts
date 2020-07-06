export function alternatingSums(a: number[]): number[] {
  return a.reduce((acc, curr, i) => ((acc[i % 2] += curr), acc), [0, 0]);
}

export function alternatingSumsV2(a: number[]): number[] {
  const sum = [0, 0];
  const len = a.length;
  for (let i = 0; i < len; i += 2) {
    sum[0] += a[i];
    sum[1] += i < len - 1 ? a[i + 1] : 0;
  }
  return sum;
}
