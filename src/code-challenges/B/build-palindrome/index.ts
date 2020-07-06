export function buildPalindrome(st: string): string {
  const isPalindrome = (s: string[]) => s.join('') === s.reverse().join('');
  const split = st.split('');
  const len = split.length;
  for (let i = 0; i < len; i++) {
    if (isPalindrome([...split])) {
      break;
    }
    split.splice(len, 0, split[i]);
  }
  return split.join('');
}
