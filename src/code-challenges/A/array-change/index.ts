export function arrayChange(inputArray: number[]): number {
  let sum = 0;
  for (let i = 1; i < inputArray.length; i++) {
    const diff = inputArray[i - 1] - inputArray[i] + 1;
    if (diff > 0) {
      sum += diff;
      inputArray[i] += diff;
    }
  }
  return sum;
}
