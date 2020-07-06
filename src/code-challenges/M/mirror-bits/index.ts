export function mirrorBits(a: number): number {
  let b = 0;
  while (a > 0) {
    b <<= 1;
    b |= a & 1; // or b += a % 2;
    a >>= 1;
  }
  return b;
}

export function mirrorBitsV2(a: number): number {
  return parseInt([...a.toString(2)].reverse().join(''), 2);
}
