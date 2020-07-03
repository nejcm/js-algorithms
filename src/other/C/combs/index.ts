export function combs(comb1: string, comb2: string): number {
  const a = parseInt(
    comb1.replace(/./g, (x) => (x === '*' ? '1' : '0')),
    2,
  );
  const b = parseInt(
    comb2.replace(/./g, (x) => (x === '*' ? '1' : '0')),
    2,
  );

  let i = 0;
  let j = 0;
  while ((a << i) & b) i++;
  while ((b << j) & a) j++;
  return Math.min(
    Math.max(comb1.length + i, comb2.length),
    Math.max(comb2.length + j, comb1.length),
  );
}

export function combsV2(comb1: string, comb2: string): number {
  const calc = (c1: string, c2: string): number => {
    while ([...c2].some((x, i) => x == c1[i] && x == '*')) c2 = `.${c2}`;
    return Math.max(c1.length, c2.length);
  };
  return Math.min(calc(comb1, comb2), calc(comb2, comb1));
}
