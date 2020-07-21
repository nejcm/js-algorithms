export function maxProfit(prices: number[]): number {
  if (prices.length === 0) return 0;

  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) max += prices[i + 1] - prices[i];
  }
  return max;
}
