export type comparable = number | string;

export const lessThan = <T = comparable>(val1: T, val2: T): boolean =>
  val1 < val2;
export const lessOrEqualThan = <T = comparable>(val1: T, val2: T): boolean =>
  val1 <= val2;
export const equalThan = <T = comparable>(val1: T, val2: T): boolean =>
  val1 === val2;
export const greaterThan = <T = comparable>(val1: T, val2: T): boolean =>
  val1 > val2;
export const greaterOrEqualThan = <T = comparable>(val1: T, val2: T): boolean =>
  val1 >= val2;
