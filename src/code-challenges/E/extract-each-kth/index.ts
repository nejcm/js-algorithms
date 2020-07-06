export function extractEachKth(inputArray: number[], k: number): number[] {
  return inputArray.filter((_, i) => (i + 1) % k);
}
