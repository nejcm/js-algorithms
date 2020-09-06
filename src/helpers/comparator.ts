export type CompareType = number | string;

export const lessThan = <T = CompareType>(val1: T, val2: T): boolean => val1 < val2;
export const lessOrEqualThan = <T = CompareType>(val1: T, val2: T): boolean =>
  val1 <= val2;
export const equalThan = <T = CompareType>(val1: T, val2: T): boolean => val1 === val2;
export const greaterThan = <T = CompareType>(val1: T, val2: T): boolean => val1 > val2;
export const greaterOrEqualThan = <T = CompareType>(val1: T, val2: T): boolean =>
  val1 >= val2;
