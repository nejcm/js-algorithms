export function lateRide(n: number): number {
  const h = n / 60;
  const t = `${Math.floor(h)}${Math.round((h % 1) * 60)}`;
  return t.split('').reduce((a, c) => a + parseInt(c, 10), 0);
}

export function lateRideV2(n: number): number {
  const hours = (n / 60) | 0;
  const minutes = n % 60;
  return ((hours / 10) | 0) + (hours % 10) + ((minutes / 10) | 0) + (minutes % 10);
}
