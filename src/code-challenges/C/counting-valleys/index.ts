export function countingValleys(n: number, s: string[]): number {
  let valley = 0;
  let level = 0;
  let ground = true;
  for (let i = 0; i < n; i++) {
    level += s[i] === 'U' ? 1 : -1;

    if (level < 0 && ground) {
      valley = valley + 1;
      ground = false;
    }
    if (level === 0) {
      ground = true;
    }
  }
  return valley;
}
