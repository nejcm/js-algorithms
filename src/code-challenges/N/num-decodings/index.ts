export function numDecodings(s: string): number {
  if (!s || !s.length) return 0;
  const len = s.length;
  const dp: number[] = [1, s.charAt(1) !== '0' ? 1 : 0];

  for (let i = 2; i <= len; i++) {
    const first = parseInt(s.substring(i - 1, i), 10);
    const second = parseInt(s.substring(i - 2, i), 10);
    dp.push(0);
    if (first >= 0 && first <= 9) {
      dp[i] += dp[i - 1];
    }
    if (second >= 10 && second <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp.pop() as number;
}

export function numDecodingsV2(s: string): number {
  if (!s || !s.length || s[0] === '0') return 0;
  const len = s.length;
  const dp: number[] = [1, s.charAt(1) !== '0' ? 1 : 0];

  for (let i = 2; i <= len; i++) {
    dp.push(0);
    if (s[i - 1] > '0' && s[i - 1] <= '9') {
      dp[i] += dp[i - 1];
    }
    const two = s[i - 2] + s[i - 1];
    if (two >= '10' && two <= '26') {
      dp[i] += dp[i - 2];
    }
  }

  return dp.pop() as number;
}
