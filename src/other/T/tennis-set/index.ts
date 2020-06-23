export function tennisSet(score1: number, score2: number): boolean {
  if (score1 === score2 || score1 > 7 || score2 > 7) return false;
  if (score1 >= 5 && score2 >= 5) return score1 === 7 || score2 === 7;
  return score1 === 6 || score2 === 6;
}

export function tennisSetV2(score1: number, score2: number): boolean {
  const max = Math.max(score1, score2);
  const min = Math.min(score1, score2);
  return (max == 6 && min < 5) || (max == 7 && min >= 5 && min <= 6);
}
