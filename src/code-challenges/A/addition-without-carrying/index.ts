export function additionWithoutCarrying(
  param1: number,
  param2: number,
): number {
  let result = 0;
  let num = 1;
  while (param1 + param2 > 0) {
    num *= 10;
    result += (param1 + param2) % num;
    param1 -= param1 % num;
    param2 -= param2 % num;
  }
  return result;
}

export function additionWithoutCarryingV2(
  param1: number,
  param2: number,
): number {
  if (param1 == 0 || param2 == 0) return param1 + param2;
  return (
    additionWithoutCarrying(Math.floor(param1 / 10), Math.floor(param2 / 10)) *
      10 +
    ((param1 + param2) % 10)
  );
}
