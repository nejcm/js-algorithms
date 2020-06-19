export function isLucky(n: number): boolean {
  const digits = [...`${n}`];
  const len = digits.length;
  let sum = 0;
  for (let i = 0, j = len - 1; i <= j; i++, j--) {
    sum += parseInt(digits[i], 10);
    sum -= parseInt(digits[j], 10);
  }
  return sum === 0;
}
