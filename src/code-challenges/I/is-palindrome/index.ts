export function isPalindrome(x: number): boolean {
  if (x === 0) return true;
  if (x < 0 || x % 10 === 0) return false;

  const str = String(x);
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) return false;
  }
  return true;
}
