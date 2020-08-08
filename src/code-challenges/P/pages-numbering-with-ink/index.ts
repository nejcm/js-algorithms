export function pagesNumberingWithInk(current: number, numberOfDigits: number): number {
  let i;
  for (i = current; numberOfDigits > 0; i++) {
    numberOfDigits -= i.toString().split('').length;
  }
  return numberOfDigits < 0 ? i - 2 : i - 1;
}
