export function createAnagram(s: string, t: string): number {
  for (const c of s) {
    t = t.replace(c, '');
  }
  return t.length;
}
