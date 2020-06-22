export function addTwoDigits(n: number): number {
  return (n % 10) + Math.floor(n / 10);
}

export function addTwoDigitsV2(n: number): number {
  return n
    .toString()
    .split('')
    .reduce((a, c) => a + Number(c), 0);
}
