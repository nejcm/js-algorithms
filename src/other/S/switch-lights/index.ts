export function switchLights(a: number[]): number[] {
  let sum = a.reduce((s, c) => s + c, 0);
  return a.map((c) => {
    if (c === 1) sum--;
    return sum % 2;
  });
}
