export function reachNextLevel(
  experience: number,
  threshold: number,
  reward: number,
): boolean {
  return experience + reward >= threshold;
}
