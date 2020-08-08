import {Algorithm, Options} from './Algorithm';

export const containedSortedNumber = {
  seek: 11,
  result: [10],
};
export const containedLastSortedNumber = {
  seek: 20,
  result: [24],
};
export const containedFirstSortedNumber = {
  seek: 1,
  result: [0],
};
export const containedMultipleSortedNumber = {
  seek: 16,
  result: [15, 16, 17, 18, 19],
};
export const notFoundSortedNumber = {
  seek: 0,
  result: [],
};
export const notFoundAboveSortedNumber = {
  seek: 21,
  result: [],
};
export const numbersSortedArray = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  16,
  16,
  16,
  16,
  17,
  18,
  18,
  19,
  20,
];
export const containedNumber = {
  seek: 11,
  result: [6],
};
export const containedMultipleNumber = {
  seek: 7,
  result: [4, 10],
};
export const notFoundNumber = {
  seek: -1,
  result: [],
};
export const numbersArray = [
  20,
  15,
  1,
  8,
  7,
  12,
  11,
  5,
  15,
  9,
  7,
  -19,
  -2,
  18,
  3,
  -4,
  4,
  0,
];

export const containedString = {
  seek: 'aa',
  result: [6],
};
export const containedMultipleString = {
  seek: 'z',
  result: [1, 8],
};
export const notFoundString = {
  seek: 'abcd',
  result: [],
};
export const stringArray = [
  'a',
  'z',
  'ca',
  'a a',
  'a b c d',
  'abc',
  'aa',
  'bb',
  'z',
  'ha',
];

const Tester = {
  testEmpty: (
    algorithm: (opts?: Options<number>) => Algorithm<number>,
    options?: Options<number>,
  ): void => {
    const alg = algorithm(options);
    // This is only to force typescript to accept the parameter to test it
    expect(alg.run(((null as unknown) as unknown[]) as number[], 0).result).toEqual([]);
    expect(alg.run(((undefined as unknown) as unknown[]) as number[], 1).result).toEqual(
      [],
    );
  },
  testNumbers: (
    algorithm: (opts?: Options<number>) => Algorithm<number>,
    options?: Options<number>,
  ): void => {
    const alg = algorithm(options);
    expect(alg.run([], -1).result).toEqual([]);
    expect(alg.run([1], -1).result).toEqual([]);
    expect(alg.run([1, 2], 2).result).toEqual([1]);
    expect(alg.run([2, 1], 2).result).toEqual([0]);
    expect(alg.run([-5, -1, 5, 6, 8], 6).result).toEqual([3]);
    expect(alg.run([-5, -1, -2, -1, -9], -2).result).toEqual([2]);
    expect(alg.run([-5, -1, -2, -1, -9], -1).result).toEqual([1, 3]);
    expect(alg.run([-5, -1, -2, -1, -9], -4).result).toEqual([]);
    expect(alg.run(numbersArray, containedNumber.seek).result).toEqual(
      containedNumber.result,
    );
    expect(alg.run(numbersArray, notFoundNumber.seek).result).toEqual(
      notFoundNumber.result,
    );
  },
  testSortedNumbers: (
    algorithm: (opts?: Options<number>) => Algorithm<number>,
    options?: Options<number>,
  ): void => {
    const alg = algorithm(options);
    expect(alg.run([], 0).result).toEqual([]);
    expect(alg.run([0], 0).result).toEqual([0]);
    expect(alg.run([-1], 0).result).toEqual([]);
    expect(alg.run([-5, -2, 0, 1, 2, 4], 0).result).toEqual([2]);
    expect(alg.run([-5, -2, 0, 1, 2, 4], -1).result).toEqual([]);
    expect(alg.run([-9, -5, -2, -1, -1], -1).result).toEqual([3, 4]);
    expect(alg.run([-9, -5, -2, -1, -1], -8).result).toEqual([]);
    expect(alg.run([2, 6, 8, 8, 10, 10, 10], 5).result).toEqual([]);
    expect(alg.run([2, 6, 8, 8, 10, 10, 10], 7).result).toEqual([]);
    expect(alg.run([2, 6, 8, 8, 10, 10, 10], 6).result).toEqual([1]);
    expect(alg.run(numbersSortedArray, containedSortedNumber.seek).result).toEqual(
      containedSortedNumber.result,
    );
    expect(alg.run(numbersSortedArray, containedFirstSortedNumber.seek).result).toEqual(
      containedFirstSortedNumber.result,
    );
    expect(alg.run(numbersSortedArray, containedLastSortedNumber.seek).result).toEqual(
      containedLastSortedNumber.result,
    );
    expect(alg.run(numbersSortedArray, notFoundSortedNumber.seek).result).toEqual(
      notFoundSortedNumber.result,
    );
    expect(alg.run(numbersSortedArray, notFoundAboveSortedNumber.seek).result).toEqual(
      notFoundAboveSortedNumber.result,
    );
    expect(
      alg.run(numbersSortedArray, containedMultipleSortedNumber.seek).result,
    ).toEqual(containedMultipleSortedNumber.result);
  },
  testStrings: (
    algorithm: (opts?: Options<string>) => Algorithm<string>,
    options?: Options<string>,
  ): void => {
    const alg = algorithm(options);

    expect(alg.run([''], ' ').result).toEqual([]);
    expect(alg.run(['a'], 'a').result).toEqual([0]);
    expect(alg.run(['aa', 'a'], 'a').result).toEqual([1]);
    expect(alg.run(['aa', 'a'], 'aaa').result).toEqual([]);
    expect(alg.run(['aa', 'aa'], 'aa').result).toEqual([0, 1]);
    expect(alg.run(stringArray, containedString.seek).result).toEqual(
      containedString.result,
    );
    expect(alg.run(stringArray, notFoundString.seek).result).toEqual(
      notFoundString.result,
    );
  },
  testCustomComparator: (
    algorithm: (opts?: Options<string>) => Algorithm<string>,
    options?: Options<string>,
  ): void => {
    const algoOptions = {
      compareFunction: (val1: string, val2: string): boolean => val1.length < val2.length,
      ...options,
    };
    const alg = algorithm(algoOptions);

    expect(alg.run([''], '').result).toEqual([]);
    expect(alg.run(['a'], 'aa').result).toEqual([0]);
    expect(alg.run(['aa', 'a'], 'aa').result).toEqual([1]);
    expect(alg.run(['aa', 'a'], 'bc').result).toEqual([1]);
    expect(alg.run(['aa', 'aa'], 'bc').result).toEqual([]);
    expect(alg.run(['aa', 'bbbb', 'cc', 'd', 'eeeee', 'fff'], 'xxx').result).toEqual([
      0,
      2,
      3,
    ]);
  },
  testTiming: (algorithm: () => Algorithm<number>): void => {
    const alg = algorithm();
    expect(alg.timedRun(numbersArray, notFoundNumber.seek).time).toBeGreaterThan(0);
  },
};

export default Tester;
