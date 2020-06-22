export function absoluteValuesSumMinimization(a: number[]): number {
  return a[Math.ceil(a.length / 2) - 1];
}

export function absoluteValuesSumMinimizationV2(a: number[]): number {
  const found = a.reduce(
    (acc: {value: number | null; index: number}, curr, index) => {
      const value = a.reduce((acc2, curr2) => acc2 + Math.abs(curr2 - curr), 0);
      return acc?.value && acc.value <= value ? acc : {value, index};
    },
    {value: null, index: 0},
  );
  return a[found.index];
}
