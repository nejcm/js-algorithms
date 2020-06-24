export function swapAdjacentBits(n: number): number {
  return ((n & 0x55555555) << 1) | ((n & 0xaaaaaaaa) >> 1);
}
