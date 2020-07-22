export function checkIfExist(arr: number[]): boolean {
  const map: {[key: number]: boolean} = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i] * 2] || map[arr[i] / 2]) return true;
    map[arr[i]] = true;
  }
  return false;
}
