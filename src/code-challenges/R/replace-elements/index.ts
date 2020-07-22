export function replaceElements(arr: number[]): number[] {
  const len = arr.length;
  if (len < 1) return [];

  let max = arr[len - 1];
  arr[len - 1] = -1;
  for (let i = len - 2; i >= 0; i--) {
    const curr = arr[i];
    arr[i] = max;
    if (curr > max) max = curr;
  }
  return arr;
}
