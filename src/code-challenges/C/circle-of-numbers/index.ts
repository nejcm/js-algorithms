export function circleOfNumbers(n: number, firstNumber: number): number {
  return (firstNumber + n / 2) % n;
}
