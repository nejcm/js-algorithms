export function metroCard(lastNumberOfDays: number): number[] {
  if (lastNumberOfDays <= 30) return [31];
  return [28, 30, 31];
}
