export function almostIncreasingSequence(sequence: number[]): boolean {
  const len = sequence.length;
  for (let i = 1, s = 0; i < len; i++) {
    if (sequence[i - 1] >= sequence[i]) {
      s++;
      if (s > 1) return false;
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])
        return false;
    }
  }
  return true;
}
