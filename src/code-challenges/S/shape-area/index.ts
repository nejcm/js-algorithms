export function shapeArea(n: number): number {
  return n * (n - 1) * 2 + 1;
}

export function shapeAreaV2(n: number): number {
  return n * n + (n - 1) * (n - 1);
}
