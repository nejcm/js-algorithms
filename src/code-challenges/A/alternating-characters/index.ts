export function alternatingCharacters(s: string): number {
  let isA = s[0] === 'A';
  return s
    .split('')
    .splice(1)
    .reduce((ac, c) => {
      ac += (isA && c === 'A') || (!isA && c === 'B') ? 1 : 0;
      isA = c === 'A';
      return ac;
    }, 0);
}
