export function evenDigitsOnly(n: number): boolean {
  return !`${n}`.split('').some((x) => parseInt(x, 10) % 2 !== 0);
}

export function evenDigitsOnlyV2(n: number): boolean {
  return !`${n}`.match(/[13579]/);
}

export function evenDigitsOnlyV3(n: number): boolean {
  const num = `${n}`;
  const len = num.length;
  for (let i = 0; i < len; i++) {
    if (parseInt(num[i], 10) % 2 !== 0) return false;
  }
  return true;
}
