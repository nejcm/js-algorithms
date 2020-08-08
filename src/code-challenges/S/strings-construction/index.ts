export function stringsConstruction(a: string, b: string): number {
  let count = 0;
  while (count >= 0) {
    for (const x of a) {
      if (b.indexOf(x) < 0) return count;
      b = b.replace(x, '');
    }
    count++;
  }
  return count;
}

export function stringsConstructionV2(a: string, b: string): number {
  return Math.min(
    ...a
      .split('')
      .map((i) => Math.floor((b.split(i).length - 1) / (a.split(i).length - 1))),
  );
}

export function stringsConstructionV3(a: string, b: string): number {
  const dict: {[key: string]: number} = {};
  for (let i = 0; i < a.length; i++) {
    if (dict[a[i]]) continue;
    const reg = new RegExp(a[i], 'g');
    dict[a[i]] = Math.floor((b.match(reg) || []).length / (a.match(reg) || []).length);
    if (!dict[a[i]]) return 0;
  }
  return Math.min(...Object.values(dict));
}
