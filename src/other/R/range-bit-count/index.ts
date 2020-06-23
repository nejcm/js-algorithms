export function rangeBitCount(a: number, b: number): number {
  const bits = (num: number): number => {
    num = num - ((num >> 1) & 0x55555555);
    num = (num & 0x33333333) + ((num >> 2) & 0x33333333);
    return (((num + (num >> 4)) & 0xf0f0f0f) * 0x1010101) >> 24;
  };
  return Array(b - a + 1)
    .fill(0)
    .reduce((ac, _v, i) => ac + bits(i + a), 0);
}

export function rangeBitCountV2(a: number, b: number): number {
  let packed = '';
  while (a <= b) {
    packed += a.toString(2);
    a++;
  }
  return packed.split('1').length - 1;
}
