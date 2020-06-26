export function isSumOfConsecutive2(n: number): number {
  let count = 0;
  for (let i = 3; i <= n; i = i + 2) {
    if (n % i == 0) count++;
  }
  return count;
}

export function isSumOfConsecutive2V2(n: number): number {
  let count = 0;
  for (let i = 1; i * (i + 1) < 2 * n; i++) {
    const a = (1.0 * n - (i * (i + 1)) / 2) / (i + 1);
    if (a - (a | 0) === 0) count++;
  }
  return count;
}

export function isSumOfConsecutive2V3(n: number): number {
  let count = 0;
  let left = 1;
  let right = 2;
  let sum = 3;

  while (count >= 0) {
    if (left == right) return count;
    if (sum == n) count++;
    if (sum <= n) sum += ++right;
    if (sum > n) sum -= left++;
  }
  return count;
}
