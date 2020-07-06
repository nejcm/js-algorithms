export function houseOfCats(legs: number): number[] {
  return [...Array(legs / 2 + 1).keys()].filter((i) => (legs - 2 * i) % 4 == 0);
}

export function houseOfCatsV2(legs: number): number[] {
  const len = Math.floor(legs / 4) + 1;
  return Array(len)
    .fill(0)
    .map((_, i) => (legs - 4 * (len - i - 1)) / 2);
}
