export default function factorial(number: number): number {
  let result = 1;
  for (let i = 2; i <= number; i++) result *= i;
  return result;
}
