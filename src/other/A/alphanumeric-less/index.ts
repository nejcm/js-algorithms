export function alphanumericLess(s1: string, s2: string): boolean {
  const x1 = s1.replace(/[0-9]+/g, (a) => a.padStart(20, '0'));
  const x2 = s2.replace(/[0-9]+/g, (a) => a.padStart(20, '0'));
  if (x1 < x2) return true;
  if (x1 > x2) return false;
  return s1.padEnd(20, 'Z') < s2.padEnd(20, 'Z');
}
