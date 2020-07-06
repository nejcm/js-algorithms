export function concatenateArrays(a: number[], b: number[]): number[] {
  return [...a, ...b];
}

export function concatenateArraysV2(a: number[], b: number[]): number[] {
  return a.concat(b);
}
