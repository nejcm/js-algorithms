export function jumpingOnClouds(c: number[]): number {
  let jumps = 0;
  let i = 0;
  const len = c.length;
  while (i < len - 1) {
    if (i === len - 1) i++;
    else if (c[i + 2] === 0) i = i + 2;
    else i++;
    jumps++;
  }
  return jumps;
}
