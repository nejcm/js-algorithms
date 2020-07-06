export function deleteDigit(n: number): number {
  const s = n.toString();
  return Math.max(
    ...Array(s.length)
      .fill(0)
      .map((_v, i) => {
        return parseInt(s.slice(0, i) + s.slice(i + 1), 10);
      }),
  );
}
