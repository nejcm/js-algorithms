export function isBeautifulString(inputString: string): boolean {
  const arr = new Array(26).fill(0);
  inputString.split('').map((val) => arr[val.charCodeAt(0) - 97]++);
  let max = arr[0];
  return arr.every((val) => max >= val && ((max = val), 1));
}
