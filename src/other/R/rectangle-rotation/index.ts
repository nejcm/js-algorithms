export function rectangleRotation(a: number, b: number): number {
  const p1 = Math.floor(Math.sqrt((a * a) / 2));
  const p2 = Math.floor(Math.sqrt((b * b) / 2));
  return (p1 * p2 + Math.floor((p1 + p2) / 2)) * 2 + 1;
}

export function rectangleRotationV2(a: number, b: number): number {
  a = Math.floor(a / 1.41421356237); // sqrt 2
  b = Math.floor(b / 1.41421356237);
  return (2 * a * b + a + b) | 1;
}
