export function digitDegree(n: number): number {
  let c = 0;
  let s = n.toString();
  while (s.length > 1) {
    s = s.split('').reduce((x, y) => (Number(x) + Number(y)).toString());
    c++;
  }
  return c;
}

export function digitDegreeV2(n: number): number {
  const sum = (value: number): number => {
    let s = 0;
    while (value) {
      s += value % 10;
      value = Math.floor(value / 10);
    }
    return s;
  };
  let curr = n;
  let i = 0;
  while (curr > 10) {
    curr = sum(curr);
    i++;
  }
  return i;
}
