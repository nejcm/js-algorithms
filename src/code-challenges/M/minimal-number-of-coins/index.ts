export function minimalNumberOfCoins(coins: number[], price: number): number {
  let sum = 0;
  for (let i = coins.length - 1; i >= 0; i--) {
    if (price < 1) break;
    const s = Math.floor(price / coins[i]);
    sum += s;
    price -= s * coins[i];
  }
  return sum;
}

export function minimalNumberOfCoinsV2(coins: number[], price: number): number {
  let t;
  return coins
    .reverse()
    .reduce((s, v) => ((t = (price / v) ^ 0), (price = price % v), s + t), 0);
}
