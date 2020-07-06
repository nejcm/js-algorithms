export function removeArrayPart(
  inputArray: number[],
  l: number,
  r: number,
): number[] {
  return inputArray.filter((_, i) => i < l || i > r);
}

export function removeArrayPartV2(
  inputArray: number[],
  l: number,
  r: number,
): number[] {
  return inputArray.slice(0, l).concat(inputArray.slice(r + 1));
}
