export function stringsRearrangement(inputArray: string[]): boolean {
  const checkDiff = (s1: string, s2: string): boolean => {
    let mismatches = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) mismatches++;
      if (mismatches > 1) break;
    }
    return mismatches === 1;
  };

  const findNext = (current: string, arr: string[]): string[] => {
    if (arr.length === 0) return arr;
    for (let i = 0; i < arr.length; i++) {
      if (checkDiff(current, arr[i])) {
        const rest = findNext(arr[i], arr.slice(0, i).concat(arr.slice(i + 1)));
        if (rest.length === 0) return rest;
      }
    }
    return arr;
  };

  for (let i = 0; i < inputArray.length; i++) {
    const remaining = findNext(inputArray[i], inputArray);
    if (remaining.length === 0) return true;
  }
  return false;
}
