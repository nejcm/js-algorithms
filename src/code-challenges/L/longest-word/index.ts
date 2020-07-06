export function longestWord(text: string): string {
  return (
    text
      .match(/\b([A-Z]+)\b/gi)
      ?.reduce((a, c) => ((a = a.length >= c.length ? a : c), a), '') || ''
  );
}
