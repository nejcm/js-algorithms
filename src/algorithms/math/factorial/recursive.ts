export default function factorial(number: number): number {
  return number > 1 ? number * factorial(number - 1) : 1;
}
