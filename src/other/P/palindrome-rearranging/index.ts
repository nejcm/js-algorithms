export function palindromeRearranging(inputString: string): boolean {
  const counts: {[key: string]: number} = {};
  const len = inputString.length;
  for (let i = 0; i < len; i++) {
    counts[inputString[i]] = (counts[inputString[i]] || 0) + 1;
  }
  const sum = Object.keys(counts).reduce((acc, key) => {
    return acc + (counts[key] % 2);
  }, 0);
  return sum === 0 || (len % 2 === 1 && sum === 1);
}

export function palindromeRearrangingV2(inputString: string): boolean {
  return (
    inputString
      .split('')
      .sort()
      .join('')
      .replace(/(\w)\1/g, '').length < 2
  );
}

export function palindromeRearrangingV3(inputString: string): boolean {
  const ss = inputString.split('').sort();
  let i = 0;
  while (ss.length) {
    const t = ss.shift();
    if (t === ss[0]) ss.shift();
    else i++;
  }
  return i < 2;
}
