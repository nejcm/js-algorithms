export function countSumOfTwoRepresentations2(n: number, l: number, r: number): number {
  let result = 0;
  for (let i = l; i <= r; i++) {
    if (i <= n - i && n - i <= r) {
      result++;
    }
  }
  return result;
}

export function countSumOfTwoRepresentations2V2(n: number, l: number, r: number): number {
  return Math.max(Math.min(Math.floor(n / 2) - l, r - Math.ceil(n / 2)) + 1, 0);
}
