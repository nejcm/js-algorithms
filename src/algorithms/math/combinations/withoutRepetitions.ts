export default function combinationsWithoutRepetitions<T>(
  values: T[],
  length = 1,
): T[][] | undefined {
  const len = values.length;
  // is empty
  if (!len || length < 1) return undefined;

  const createCombinations = (vals: T[], r: number): T[][] => {
    if (r === 1) return vals.map((value) => [value]);

    const combos: T[][] = [];
    vals.forEach((value, index) => {
      // remove current character
      const data = createCombinations(vals.slice(index + 1), r - 1);
      data.forEach((elem) => combos.push([value, ...elem]));
    });
    return combos;
  };

  return createCombinations(values, length);
}
