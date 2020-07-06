export function maxMultiple(divisor: number, bound: number): number {
  return bound - (bound % divisor);
}
