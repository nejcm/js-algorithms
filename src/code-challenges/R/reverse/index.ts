export function reverse(x: number): number {
  let reversed = 0;
  let num = x;
  while (num !== 0) {
    const m = num % 10;
    reversed = reversed * 10 + m;
    num = Math.trunc(num / 10);
  }
  if (reversed > 0x7fffffff || reversed < -0x80000000) return 0;
  return reversed;
}

export function reverseV2(x: number): number {
  const reversed = +String(Math.abs(x)).split('').reverse().join('');
  if (reversed > 0x7fffffff) return 0;
  return x < 0 ? -reversed : reversed;
}
