export function firstReverseTry(arr: number[]): number[] {
  if (arr.length < 2) return arr;
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr;
}

export function firstReverseTryV2(arr: number[]): number[] {
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr[0] === undefined ? [] : arr;
}

export function firstReverseTryV3(arr: number[]): number[] {
  if (arr.length < 2) return arr;
  return [arr[arr.length - 1]].concat(arr.slice(1, arr.length - 1)).concat(arr[0]);
}
