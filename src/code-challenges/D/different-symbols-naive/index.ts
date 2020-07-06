export function differentSymbolsNaiveV2(s: string): number {
  return new Set(s).size;
}

export function differentSymbolsNaive(s: string): number {
  return Object.keys(
    s
      .split('')
      .reduce(
        (acc: {[key: string]: boolean}, curr) => ((acc[curr] = true), acc),
        {},
      ),
  ).length;
}
