export function arrayManipulation(
  n: number,
  queries: [number, number, number][],
): number {
  const numbers = Array(n).fill(0);
  for (let i = 0; i < queries.length; i++) {
    const k = queries[i][2];
    numbers[queries[i][0] - 1] += k;
    numbers[queries[i][1]] -= k;
  }

  let max = 0;
  for (let i = 1; i < numbers.length; i++) {
    numbers[i] += numbers[i - 1];
    if (numbers[i] > max) max = numbers[i];
  }
  return max;
}

export function arrayManipulationV2(
  _n: number,
  queries: [number, number, number][],
): number {
  const map: {[key: number]: number} = {};
  let max = -Infinity;
  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      map[j] = (map[j] || 0) + queries[i][2];
      max = max > map[j] ? max : map[j];
    }
  }
  return max;
}
