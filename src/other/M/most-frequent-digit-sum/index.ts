export function mostFrequentDigitSum(n: number): number {
  const obj: {[key: string]: number} = {};
  const sum = (m: number) => [...`${m}`].reduce((s, v) => s + +v, 0);
  for (let i = n; i > 0; i -= sum(i)) obj[sum(i)] = -~obj[sum(i)];
  return +Object.keys(obj).reduce((s, v) => (obj[s] > obj[v] ? s : v));
}

export function mostFrequentDigitSumV2(n: number): number {
  const sumDigits = (value: number): number => {
    let sum = 0;
    while (value > 0) {
      sum += value % 10;
      value = Math.floor(value / 10);
    }
    return sum;
  };

  const map: {[key: string]: number} = {};
  let maxEl = 0;
  let maxCount = 0;
  while (n > 0) {
    const sum = sumDigits(n);
    n -= sum;

    map[sum] = -~map[sum];
    if (map[sum] > maxCount || (map[sum] === maxCount && sum > maxEl)) {
      maxEl = sum;
      maxCount = map[sum];
    }
  }
  return maxEl;
}
