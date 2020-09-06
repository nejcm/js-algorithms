export function countTriplets(arr: number[], r: number): number {
  let count = 0;
  const len = arr.length;
  const map2 = new Map<number, number>();
  const map3 = new Map<number, number>();
  for (let i = 0; i < len; i++) {
    const prod = arr[i] * r;
    if (map3.has(arr[i])) count += map3.get(arr[i]) as number;
    if (map2.has(arr[i])) {
      map3.set(
        prod,
        map3.has(prod)
          ? (map3.get(prod) as number) + (map2.get(arr[i]) as number)
          : (map2.get(arr[i]) as number),
      );
    }
    map2.set(prod, (map2.get(prod) || 0) + 1);
  }
  return count;
}

countTriplets([1, 3, 9, 9, 27, 81], 3);
