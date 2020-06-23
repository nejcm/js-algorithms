export function arrayPacking(a: number[]): number {
  return a.reduce((ac, c, i) => ac + c * 256 ** i);
}

export function arrayPackingV2(a: number[]): number {
  return parseInt(
    a
      .reverse()
      .map((v) => v.toString(2).padStart(8, '0'))
      .join(''),
    2,
  );
}
