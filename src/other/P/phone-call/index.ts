/* eslint-disable babel/camelcase */
export function phoneCall(
  min1: number,
  min2_10: number,
  min11: number,
  s: number,
): number {
  const arr: {[key: string]: number}[] = [
    {v: min1, t: 1},
    {v: min2_10, t: 10 - 1},
    {v: min11},
  ];
  const result = {minutes: 0, left: s};
  for (let i = 0; i < arr.length; i++) {
    const a = Math.floor(result.left / arr[i].v);
    const mins = arr[i].t > a ? a : arr[i].t || a;
    result.minutes += mins;
    if (arr[i].t > mins) {
      break;
    }
    result.left -= mins * arr[i].v;
  }
  return result.minutes;
}

export function phoneCallV2(
  min1: number,
  min2_10: number,
  min11: number,
  s: number,
): number {
  if (s < min1) return 0;
  s -= min1;
  if (s < min2_10 * 9) return (s / min2_10 + 1) | 0;
  s -= min2_10 * 9;
  return (s / min11 + 10) | 0;
}
