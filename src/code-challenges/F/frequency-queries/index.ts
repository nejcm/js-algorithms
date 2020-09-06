export function freqQuery(queries: [number, number][]): number[] {
  const result = [];
  const map: {[key: number]: number} = {};
  const freq: number[] = [];

  for (let i = 0; i < queries.length; i += 1) {
    const [action, value] = queries[i];
    const initValue = map[value] || 0;
    if (action === 1) {
      map[value] = initValue + 1;
      freq[initValue] = (freq[initValue] || 0) - 1;
      freq[initValue + 1] = (freq[initValue + 1] || 0) + 1;
    } else if (action === 2 && initValue > 0) {
      map[value] = initValue - 1;
      freq[initValue - 1] += 1;
      freq[initValue] -= 1;
    } else if (action === 3) result.push(freq[value] > 0 ? 1 : 0);
  }
  return result;
}
