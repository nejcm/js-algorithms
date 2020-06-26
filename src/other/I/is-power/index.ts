export function isPower(n: number): boolean {
  if (n === 1) return true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    let j;
    for (j = 2; i ** j < n; j++);
    if (i ** j === n) return true;
  }
  return false;
}
