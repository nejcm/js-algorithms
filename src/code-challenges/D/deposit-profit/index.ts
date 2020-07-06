export function depositProfit(
  deposit: number,
  rate: number,
  threshold: number,
): number {
  let curr = deposit;
  let i = 0;
  while (curr < threshold) {
    curr = curr + (curr / 100) * rate;
    i++;
  }
  return i;
}

export function depositProfitV2(
  deposit: number,
  rate: number,
  threshold: number,
): number {
  return Math.ceil(Math.log(threshold / deposit) / Math.log(rate / 100 + 1));
}
