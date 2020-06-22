// Overkill for the light version but works any number of items
export function knapsackLight(
  value1: number,
  weight1: number,
  value2: number,
  weight2: number,
  maxW: number,
): number {
  const result = [
    {v: value1, w: weight1},
    {v: value2, w: weight2},
  ]
    .sort((a, b) => b.v - a.v)
    .reduce(
      (acc, curr) => {
        const w = acc.w + curr.w;
        if (w <= maxW) {
          acc.v += curr.v;
          acc.w += w;
        }
        return acc;
      },
      {v: 0, w: 0},
    );
  return result.v;
}

export function knapsackLightV2(
  value1: number,
  weight1: number,
  value2: number,
  weight2: number,
  maxW: number,
): number {
  return Math.max(
    maxW >= weight1 ? value1 : 0,
    maxW >= weight2 ? value2 : 0,
    maxW >= weight1 + weight2 ? value1 + value2 : 0,
  );
}
