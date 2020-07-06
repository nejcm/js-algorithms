export function squareDigitsSequence(a0: number): number {
  const before = {[a0]: true};
  let cur = a0;
  while (cur) {
    cur = `${cur}`.split('').reduce((a, c) => a + Number(c) * Number(c), 0);
    if (before[cur]) break;
    before[cur] = true;
  }
  return Object.keys(before).length + 1;
}
