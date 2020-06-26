export function increaseNumberRoundness(n: number): boolean {
  return /0[1-9]/.test(`${n}`);
}

export function increaseNumberRoundnessV2(n: number): boolean {
  let gotToSignificant = false;
  while (n > 0) {
    if (n % 10 == 0 && gotToSignificant) {
      return true;
    } else if (n % 10 != 0) {
      gotToSignificant = true;
    }
    n = (n / 10) | 0;
  }
  return false;
}
