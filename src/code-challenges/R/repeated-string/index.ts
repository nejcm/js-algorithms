export function repeatedString(s: string, n: number): number {
  const len = s.length;
  let a = s.substring(0, Math.min(len, n)).match(/a/g)?.length || 0;
  if (n <= len) return a;

  a *= Math.floor(n / len);
  return a + (s.substring(0, n % len).match(/a/g)?.length || 0);
}
