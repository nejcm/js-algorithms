export function arrayConversion(inputArray: number[]): number {
  let flag = false;
  while (inputArray.length > 1) {
    const arr = [];
    for (let i = 0; i < inputArray.length; i = i + 2) {
      if (flag) arr.push(inputArray[i] * inputArray[i + 1]);
      else arr.push(inputArray[i] + inputArray[i + 1]);
    }
    inputArray = arr;
    flag = !flag;
  }
  return inputArray[0];
}
