export function avoidObstacles(inputArray: number[]): number {
  for (let i = 1; ; i++) {
    if (inputArray.every((x) => x % i)) return i;
  }
}

export function avoidObstaclesV2(inputArray: number[]): number {
  let jump = 2;
  const compare = (val: number) => val % jump === 0;
  while (inputArray.some(compare)) {
    jump++;
  }
  return jump;
}

export function avoidObstaclesV3(inputArray: number[]): number {
  let jump = 2;
  let found = false;
  const len = inputArray.length;
  while (!found) {
    for (let i = 0; i < len; i++) {
      if (inputArray[i] % jump === 0) {
        jump++;
        break;
      }
      if (i === len - 1) {
        found = true;
      }
    }
  }
  return jump;
}
