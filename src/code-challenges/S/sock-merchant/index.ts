export function sockMerchant(n: number, ar: number[]): number {
  const map: {[key: string]: number} = {};
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!map[ar[i]]) map[ar[i]] = 1;
    else {
      map[ar[i]] = 0;
      count++;
    }
  }
  return count;
}
