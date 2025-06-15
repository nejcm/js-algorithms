export function isDigit(symbol: string): boolean {
  return !isNaN(symbol as unknown as number);
}

export function isDigitV2(symbol: string): boolean {
  return !isNaN(parseInt(symbol, 10));
}
