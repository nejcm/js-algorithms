export function arrayPreviousLess(items: number[]): number[] {
  return items.map(
    (val, i) =>
      items
        .slice(0, i)
        .reverse()
        .find((v) => v < val) || -1,
  );
}

export function arrayPreviousLessV2(items: number[]): number[] {
  return items.map((v, i) => {
    for (let j = i - 1; j >= 0; j--) {
      if (items[j] < v) return items[j];
    }
    return -1;
  });
}
