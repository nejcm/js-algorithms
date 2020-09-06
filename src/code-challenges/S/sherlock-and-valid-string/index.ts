export function isValid(s: string): 'YES' | 'NO' {
  const map: {[key: string]: number} = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = -~map[s[i]];
  }
  const freq: {[key: number]: number} = {};
  const keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    freq[map[keys[i]]] = -~freq[map[keys[i]]];
  }
  const entries = [...Object.entries(freq)];
  return entries.length < 2 ||
    (entries.length === 2 &&
      ((entries[0][0] === '1' && entries[0][1] === 1) ||
        (entries[1][0] === '1' && entries[1][1] === 1) ||
        ((entries[0][1] === 1 || entries[1][1] === 1) &&
          Math.abs(Number(entries[0][0]) - Number(entries[1][0])) === 1)))
    ? 'YES'
    : 'NO';
}
