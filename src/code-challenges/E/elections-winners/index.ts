export function electionsWinners(votes: number[], k: number): number {
  const max = Math.max(...votes);
  const winners = votes.filter((v) => k + v > max || v === max).length;
  return k ? winners : winners === 1 ? 1 : 0;
}
