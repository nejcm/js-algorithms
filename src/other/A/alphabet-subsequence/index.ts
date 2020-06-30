export function alphabetSubsequence(s: string): boolean {
  let prev = s[0];
  return s
    .split('')
    .slice(1)
    .every((c) => {
      if (prev >= c) return false;
      prev = c;
      return true;
    });
}

export function alphabetSubsequenceV2(s: string): boolean {
  return s === [...new Set(s)].sort().join('');
}
