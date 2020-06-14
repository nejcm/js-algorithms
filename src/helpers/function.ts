export const run = (func: unknown, args: unknown[]): unknown => {
  if (typeof func === 'function') {
    return func(...args);
  }
  return undefined;
};
