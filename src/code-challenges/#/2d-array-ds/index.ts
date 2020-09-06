export function hourglassSum(arr: number[][]): number {
  const pos = [
    [0, 0],
    [1, 0],
    [2, 0],
    [1, 1],
    [0, 2],
    [1, 2],
    [2, 2],
  ];
  let max = -Infinity;
  const len = arr.length;
  for (let i = 0; i < len - 2; i++) {
    for (let j = 0; j < arr[i].length - 2; j++) {
      const current = pos.reduce((ac, p) => (ac += arr[i + p[1]][j + p[0]]), 0);
      max = Math.max(current, max);
    }
  }
  return max;
}
