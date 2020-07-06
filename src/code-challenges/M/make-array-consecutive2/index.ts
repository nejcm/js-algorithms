export function makeArrayConsecutive2(statues: number[]): number {
  return statues
    .sort((a, b) => a - b)
    .slice(1)
    .reduce((acc, x, i) => (acc += Math.abs(statues[i] - x) - 1), 0);
}

export function makeArrayConsecutive2V2(statues: number[]): number {
  return Math.max(...statues) - Math.min(...statues) + 1 - statues.length;
}
