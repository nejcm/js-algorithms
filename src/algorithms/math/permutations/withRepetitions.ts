export default function permutationsWithRepetitions<T>(values: T[]): T[][] | undefined {
  const len = values.length;
  // is empty
  if (!len) return undefined;

  const createPermutations = (vals: T[], r: number): T[][] => {
    if (r === 1) return vals.map((value) => [value]);

    const perms: T[][] = [];
    const data = createPermutations(vals, r - 1);
    vals.forEach((value) => data.forEach((elem) => perms.push([value, ...elem])));
    return perms;
  };

  return createPermutations(values, len);
}
