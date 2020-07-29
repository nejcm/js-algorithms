export function replaceSequence(str: string): number {
  if (!str.length) return 0;
  let char = str[0];
  let count = 1;
  let result = 0;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === char) count++;
    else {
      result += Math.floor(count / 3);
      char = str[i];
      count = 1;
    }
  }
  // leftovers
  result += Math.floor(count / 3);
  return result;
}
