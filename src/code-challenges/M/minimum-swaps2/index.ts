export function minimumSwaps(arr: number[]): number {
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i + 1 === arr[i]) continue;
    const e = arr[i];
    [arr[i], arr[e - 1]] = [arr[e - 1], arr[i]];
    swaps++;
    i--;
  }
  return swaps;
}

export function minimumSwapsV2(arr: number[]): number {
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] !== i + 1) {
      const e = arr[i];
      [arr[i], arr[e - 1]] = [arr[e - 1], arr[i]];
      swaps++;
    }
  }
  return swaps;
}
