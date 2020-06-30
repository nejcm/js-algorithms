export function adaNumber(line: string): boolean {
  line = line.replace(/_/g, ``);
  if (line.match(/^\d+$/)) return true;
  const num = line.match(/^(\d{1,2})#([0-9a-f]+)#$/i) || [];
  const base = parseInt(num[1] || '', 10);
  return num
    ? [...num[2]].every((v) => !isNaN(parseInt(v, base))) &&
        base >= 2 &&
        base <= 16
    : false;
}

export function adaNumberV2(line: string): boolean {
  const l = line.replace(/_/g, '');
  if (/^\d+$/.test(l)) return true;
  const s = l.split('#');
  if (s.length !== 3 || s[0].length === 0 || s[1].length === 0) return false;
  const base = parseInt(s[0], 10);
  if (base < 2 || base > 16) return false;
  return s[1].split('').every((c) => parseInt(c, base) >= 0);
}
