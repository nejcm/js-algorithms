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
