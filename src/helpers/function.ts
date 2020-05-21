export const run = (
  func: Function | undefined | null,
  args: unknown[],
): unknown => {
  if (typeof func === 'function') {
    return func(...args);
  }
  return undefined;
};
