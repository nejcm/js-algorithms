export function differentRightmostBit(n: number, m: number): number {
  return (n ^ m) & -(n ^ m);
}
