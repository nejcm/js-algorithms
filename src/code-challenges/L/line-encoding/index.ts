export function lineEncoding(s: string): string {
  return s.replace(/(.)\1*/g, (chars, i) => (i === chars ? i : chars.length + i));
}
