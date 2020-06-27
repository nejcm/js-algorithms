export function comfortableNumbers(l: number, r: number): number {
  const digitSum = (n) => {
    let s = 0;
    while (n) {
      s += n % 10;
      n = Math.floor(n / 10);
    }
    return s;
  };

  let pairs = 0;
  for (let i = l; i <= r; i++) {
    const s1 = digitSum(i);
    for (let j = i + 1; j <= r; j++) {
      const s2 = digitSum(j);
      if (j >= i - s1 && j <= i + s1 && i >= j - s2 && i <= j + s2) {
        pairs++;
      }
    }
  }
  return pairs;
}
