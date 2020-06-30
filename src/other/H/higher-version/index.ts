export function higherVersion(ver1: string, ver2: string): boolean {
  const ver1s = ver1.split('.');
  const ver2s = ver2.split('.');
  let diff = 0;
  [...ver1s].some((v1, i) => (diff = Number(v1) - Number(ver2s[i])));
  return diff > 0;
}

export function higherVersionV2(ver1: string, ver2: string): boolean {
  const v1 = ver1.split('.').map((i) => Number(i));
  const v2 = ver2.split('.').map((i) => Number(i));
  let i = 0;
  while (i < v1.length && v1[i] == v2[i]) i++;
  return v1[i] > v2[i];
}
