export function isSmooth(arr: number[]): boolean {
  const len = arr.length;
  const mid = len % 2 ? arr[Math.floor(len / 2)] : arr[len / 2] + arr[len / 2 - 1];
  return mid === arr[0] && mid === arr[len - 1];
}

export function isSmoothV2(arr: number[]): boolean {
  const l = arr.length - 1;
  return (
    arr[0] === arr[l] &&
    arr[0] === arr[Math.floor(l / 2)] + (l % 2 ? arr[Math.ceil(l / 2)] : 0)
  );
}
