export function firstDuplicate(a: number[]): number {
  for (let i = 0; i < a.length; i++) {
    const check = Math.abs(a[i]);
    if (a[check - 1] < 0) return check;
    else a[check - 1] = -a[check - 1];
  }
  return -1;
}

export function firstDuplicateV2(a: number[]): number {
  const hashSet: {[key: number]: boolean} = {};
  for (let i = 0; i < a.length; i++) {
    if (hashSet[a[i]]) return a[i];
    else hashSet[a[i]] = true;
  }
  return -1;
}
