export function candles(candlesNumber: number, makeNew: number): number {
  return candlesNumber + Math.floor((candlesNumber - 1) / (makeNew - 1));
}

export function candlesV2(candlesNumber: number, makeNew: number): number {
  let burnt = candlesNumber;
  let left = candlesNumber;
  while (left > 0) {
    const nb = Math.floor(left / makeNew);
    burnt += nb;
    left = (left % makeNew) + nb;
    if (left === left % makeNew) break;
  }
  return burnt;
}

export function candlesV3(candlesNumber: number, makeNew: number): number {
  let burnt = 0;
  let left = 0;

  while (candlesNumber > 0) {
    burnt += candlesNumber;
    left += candlesNumber;
    candlesNumber = Math.floor(left / makeNew);
    left %= makeNew;
  }
  return burnt;
}
