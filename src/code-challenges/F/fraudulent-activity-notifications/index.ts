export function makeAnagram(a: string, b: string): number {
  const map: {[key: string]: number} = {};
  for (let i = 0; i < a.length; i++) {
    map[a[i]] = -~map[a[i]];
  }
  for (let i = 0; i < b.length; i++) {
    map[b[i]] = (map[b[i]] || 0) - 1;
  }
  return Object.keys(map).reduce((ac, key) => ac + Math.abs(map[key]), 0);
}
