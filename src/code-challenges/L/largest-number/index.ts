export function largestNumber(n: number): number {
  return parseInt('9'.repeat(n), 10);
}

export function largestNumberV2(n: number): number {
  return 10 ** n - 1;
}
