export function equalPairOfBits(n: number, m: number): number {
  return (n ^ ~m) & (~(n ^ ~m) + 1);
}
