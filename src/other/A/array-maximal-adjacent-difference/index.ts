export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  return inputArray.slice(1).reduce((acc, curr, i) => {
    const diff = Math.abs(curr - inputArray[i]);
    return diff > acc ? diff : acc;
  }, 0);
}

export function arrayMaximalAdjacentDifferenceV2(inputArray: number[]): number {
  return Math.max(
    ...inputArray.slice(1).map((x, i) => Math.abs(x - inputArray[i])),
  );
}
