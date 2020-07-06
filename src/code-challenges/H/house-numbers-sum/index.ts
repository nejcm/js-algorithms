export function houseNumbersSum(inputArray: number[]): number {
  let sum = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 0) return sum;
    sum += inputArray[i];
  }
  return sum;
}

export function houseNumbersSumV2(inputArray: number[]): number {
  return inputArray.slice(0, inputArray.indexOf(0)).reduce((a, b) => a + b, 0);
}

export function houseNumbersSumV3(inputArray: number[]): number {
  let i = 0;
  let sum = 0;
  while (inputArray[i] != 0) sum += inputArray[i++];
  return sum;
}
