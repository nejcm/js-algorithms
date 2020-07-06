export function secondRightmostZeroBit(n: number): number {
  return ~(n |= -~n) & -~n;
}

export function secondRightmostZeroBitV2(n: number): number {
  return ~(n |= n + 1) & (n + 1);
}

export function secondRightmostZeroBitV3(n: number): number {
  return (
    2 **
    n.toString(2).split('').reverse().join('').split('0', 2).join('0').length
  );
}
