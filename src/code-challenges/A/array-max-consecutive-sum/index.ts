export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let max = inputArray.slice(0, k).reduce((acc, curr) => acc + curr, 0);
  let prev = max;
  for (let i = k; i < inputArray.length; i++) {
    prev = prev + inputArray[i] - inputArray[i - k];
    max = prev > max ? prev : max;
  }
  return max;
}
