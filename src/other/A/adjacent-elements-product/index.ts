export function adjacentElementsProduct(inputArray: number[]): number {
  let max = inputArray[0] * inputArray[1];
  for (let i = 1; i < inputArray.length - 1; i++) {
    const current = inputArray[i] * inputArray[i + 1];
    if (current > max) max = current;
  }
  return max;
}

export function adjacentElementsProductV2(inputArray: number[]): number {
  return Math.max(...inputArray.slice(1).map((x, i) => x * inputArray[i]));
}

export function adjacentElementsProductV3(inputArray: number[]): number {
  let prod = inputArray[0] * inputArray[1];
  for (let i = 1; i < inputArray.length - 1; i++) {
    prod = Math.max(prod, inputArray[i] * inputArray[i + 1]);
  }
  return prod;
}
