export default function permutationsWithoutRepetitions<T>(
  values: T[],
): T[][] | undefined {
  const len = values.length;
  // is empty
  if (!len) return undefined;

  const createPermutations = (vals: T[]): T[][] => {
    if (vals.length === 1) return [vals];

    const perms: T[][] = [];
    const data = createPermutations(vals.slice(1));

    const first = vals[0];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j <= data[i].length; j++) {
        const permutationPrefix = data[i].slice(0, j);
        const permutationSuffix = data[i].slice(j);
        perms.push(permutationPrefix.concat([first], permutationSuffix));
      }
    }
    return perms;
  };

  return createPermutations(values);
}
