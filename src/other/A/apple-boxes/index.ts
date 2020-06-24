export function appleBoxes(k: number): number {
  return (k * (k + 1)) / (k % 2 ? -2 : 2);
}
