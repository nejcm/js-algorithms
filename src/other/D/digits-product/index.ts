export function digitsProduct(product: number): number {
  if (product === 0) return 10;
  if (product === 1) return 1;
  let digits = '';
  for (let divisor = 9; divisor > 1; divisor--) {
    while (product % divisor === 0) {
      product /= divisor;
      digits = `${divisor}${digits}`;
    }
  }

  if (product > 1) return -1;
  return Number(digits);
}
