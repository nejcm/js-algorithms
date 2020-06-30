export function constructSquare(s: string): number {
  const calcFrequency = (str: string) => {
    const f: {[key: string]: number} = str
      .split('')
      .reduce((a: {[key: string]: number}, c) => {
        a[c] = (a[c] || 0) + 1;
        return a;
      }, {});
    return Object.values(f).sort().join('');
  };

  const sf = calcFrequency(s);
  const max = 10 ** s.length - 1;
  const lower = Math.sqrt(max / 10);
  const upper = Math.floor(Math.sqrt(max));
  for (let n = upper; n > lower; --n) {
    const curr = n * n;
    if (sf === calcFrequency(curr.toString())) return curr;
  }
  return -1;
}
