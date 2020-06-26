export function replaceMiddle(arr: number[]): number[] {
  const l = arr.length;
  const m = Math.floor(l / 2);
  return l % 2 ? arr : (arr.splice(m - 1, 2, arr[m] + arr[m - 1]), arr);
}
