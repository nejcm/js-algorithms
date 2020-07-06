export function leastFactorial(n: number): number {
  let k = 1;
  let m = 1;
  while (k < n) {
    k *= m;
    m++;
  }
  return k;
}

export function leastFactorialV2(n: number): number {
  let k = 1;
  for (let i = 2; k < n; i++) k *= i;
  return k;
}
