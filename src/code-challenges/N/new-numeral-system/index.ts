export function newNumeralSystem(number: string): string[] {
  const nc = number.charCodeAt(0);
  return Array(Math.ceil((nc - 64) / 2))
    .fill(0)
    .map((_, i) => `${String.fromCharCode(65 + i)} + ${String.fromCharCode(nc - i)}`);
}

export function newNumeralSystemV2(number: string): string[] {
  const n = number.charCodeAt(0);
  const r = [];
  for (let i = 65; i <= n - i + 65; i++) {
    r.push(`${String.fromCharCode(i)} + ${String.fromCharCode(n - i + 65)}`);
  }
  return r;
}
