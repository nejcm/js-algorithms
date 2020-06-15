export const run = (func: unknown, args: unknown[]): unknown => {
  if (typeof func === 'function') {
    return func(...args);
  }
  return undefined;
};

export const getMinMax = (array: number[]): [number, number] => {
  let min = array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } else if (array[i] > max) {
      max = array[i];
    }
  }
  return [min, max];
};

// find all matching elements nearby
export const findAllNearby = (
  values: number[],
  seek: number,
  mid: number,
  compareFunction: (v1: number, v2: number) => boolean,
): number[] => {
  const found = [mid];
  // find left of current
  let l = mid - 1;
  while (l >= 0 && run(compareFunction, [values[l], seek])) {
    found.unshift(l);
    l--;
  }
  // find right of current
  let r = mid + 1;
  while (r < values.length && run(compareFunction, [values[r], seek])) {
    found.push(r);
    r++;
  }
  return found;
};
