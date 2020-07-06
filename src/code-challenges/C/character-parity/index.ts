export function characterParity(symbol: string): string {
  const n = parseInt(symbol, 10);
  if (isNaN(n)) return 'not a digit';
  return n % 2 ? 'odd' : 'even';
}

export function characterParityV2(symbol: string): string {
  const n = parseInt(symbol, 10);
  return isNaN(n) ? `not a digit` : n & 1 ? `odd` : `even`;
}
