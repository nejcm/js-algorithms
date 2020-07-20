export function diStringMatch(S: string): number[] {
  const len = S.length;
  if (len === 0) return [];
  let high = len;
  let low = 0;
  const result = [];

  for (let i = 0; i < len; i++) {
    if (S[i] === 'D') {
      result.push(high);
      high--;
    } else {
      result.push(low);
      low++;
    }
  }
  result.push(high);
  return result;
}
