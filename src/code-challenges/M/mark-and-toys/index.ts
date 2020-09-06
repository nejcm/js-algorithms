export function maximumToys(prices: number[], k: number): number {
  const len = prices.length;
  const sorted = prices.sort((a, b) => a - b);
  let sum = 0;
  if (sum >= k) return 0;
  for (let i = 0; i < len; i++) {
    sum += sorted[i];
    if (sum >= k) return i;
  }
  return len;
}
