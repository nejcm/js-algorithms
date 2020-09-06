/**
 * Check is function and run
 * @param {unknown} func function to run
 * @param {unknown[]} args function args
 * @return {unknown} function return value
 */
export const run = (func: unknown, args: unknown[]): unknown =>
  typeof func === 'function' ? func(...args) : undefined;

// get min
export const min = (a: number, b: number): number => (a < b ? a : b);
// get max
export const max = (a: number, b: number): number => (a > b ? a : b);

/**
 * Get min and max value from array
 * @param {Array} array numbers
 * @return {[number, number]} min and max
 */
export const getMinMax = (array: number[]): [number, number] => {
  let minVal = array[0];
  let maxVal = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minVal) minVal = array[i];
    else if (array[i] > maxVal) maxVal = array[i];
  }
  return [minVal, maxVal];
};

/**
 * Find all matching elements nearby
 * @param {number[]} values array of values
 * @param {number} seek seeked value
 * @param {number} index array index position
 * @param {function} compareFunction comparator function
 * @return {number[]} matching numbers
 */
export const findAllNearby = (
  values: number[],
  seek: number,
  index: number,
  compareFunction: (v1: number, v2: number) => boolean,
): number[] => {
  const found = [index];
  // find left of current
  let l = index - 1;
  while (l >= 0 && run(compareFunction, [values[l], seek])) {
    found.unshift(l);
    l--;
  }
  // find right of current
  let r = index + 1;
  while (r < values.length && run(compareFunction, [values[r], seek])) {
    found.push(r);
    r++;
  }
  return found;
};

export const isNumber = (x: any): x is number => {
  return typeof x === 'number';
};

export const isString = (x: any): x is string => {
  return typeof x === 'string';
};
