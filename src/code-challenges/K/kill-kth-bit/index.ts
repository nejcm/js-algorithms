export function killKthBit(n: number, k: number): number {
  return (n &= ~(1 << (k - 1)));
}
