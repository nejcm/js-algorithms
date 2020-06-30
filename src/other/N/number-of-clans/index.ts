export function numberOfClans(divisors: number[], k: number): number {
  return new Set(
    [...Array(k).keys()].map((i) =>
      divisors.filter((j) => (i + 1) % j === 0).toString(),
    ),
  ).size;
}

export function numberOfClansV2(divisors: number[], k: number): number {
  const set = Array(k)
    .fill(0)
    .reduce((s, _, i) => {
      s.add(divisors.map((el) => ((i + 1) % el === 0 ? 0 : 1)).toString());
      return s;
    }, new Set());
  return set.size;
}

export function numberOfClansV3(divisors: number[], k: number): number {
  return new Set([
    ...Array(k)
      .fill(0)
      .map((_, i) =>
        divisors.reduce(
          (s, divisor, _j) => (s << 1) | ((i + 1) % divisor === 0 ? 1 : 0),
          1,
        ),
      ),
  ]).size;
}
