import {Algorithm, Options} from './Algorithm';

export const sortedArr = [
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
  17,
  18,
  19,
  20,
];
export const reverseArr = [
  20,
  19,
  18,
  17,
  16,
  15,
  14,
  13,
  12,
  11,
  10,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
];
export const notSortedArr = [
  15,
  8,
  5,
  12,
  10,
  1,
  16,
  9,
  11,
  7,
  20,
  3,
  2,
  6,
  17,
  18,
  4,
  13,
  14,
  19,
];
export const equalArr = [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
];
export const negativeArr = [-1, 0, 5, -10, 20, 13, -7, 3, 2, -3];
export const negativeArrSorted = [-10, -7, -3, -1, 0, 2, 3, 5, 13, 20];
export const decimalArr = [
  0.25,
  -1.89,
  3.7,
  0.28,
  1,
  -0.98,
  -3.2,
  0,
  0.01,
  -1.1,
];
export const decimalArrSorted = [
  -3.2,
  -1.89,
  -1.1,
  -0.98,
  0,
  0.01,
  0.25,
  0.28,
  1,
  3.7,
];

const Tester = {
  testNumbers: (
    algorithm: (opts?: Options<number>) => Algorithm<number>,
    options?: Options<number>,
  ): void => {
    const alg = algorithm(options);
    expect(alg.run([]).result).toEqual([]);
    expect(alg.run([1]).result).toEqual([1]);
    expect(alg.run([1, 2]).result).toEqual([1, 2]);
    expect(alg.run([2, 1]).result).toEqual([1, 2]);
    expect(alg.run([3, 2, 1, 0, 4, 4, 2]).result).toEqual([
      0,
      1,
      2,
      2,
      3,
      4,
      4,
    ]);
    expect(alg.run(sortedArr).result).toEqual(sortedArr);
    expect(alg.run(reverseArr).result).toEqual(sortedArr);
    expect(alg.run(notSortedArr).result).toEqual(sortedArr);
    expect(alg.run(equalArr).result).toEqual(equalArr);
  },
  testNegativeNumbers: (
    algorithm: (opts?: Options<number>) => Algorithm<number>,
    options?: Options<number>,
  ): void => {
    const alg = algorithm(options);
    expect(alg.run(negativeArr).result).toEqual(negativeArrSorted);
  },
  testDecimalNumbers: (
    algorithm: (opts?: Options<number>) => Algorithm<number>,
    options?: Options<number>,
  ): void => {
    const alg = algorithm(options);
    expect(alg.run(decimalArr).result).toEqual(decimalArrSorted);
  },
  testStrings: (
    algorithm: (opts?: Options<string>) => Algorithm<string>,
    options?: Options<string>,
  ): void => {
    const alg = algorithm(options);

    expect(alg.run(['']).result).toEqual(['']);
    expect(alg.run(['a']).result).toEqual(['a']);
    expect(alg.run(['aa', 'a']).result).toEqual(['a', 'aa']);
    expect(alg.run(['aa', 'a', 'aaba', 'aaaa']).result).toEqual([
      'a',
      'aa',
      'aaaa',
      'aaba',
    ]);
    expect(alg.run(['aa', 'z', 'ccc', 'bbbbb']).result).toEqual([
      'aa',
      'bbbbb',
      'ccc',
      'z',
    ]);
    expect(alg.run(['aa', 'aa']).result).toEqual(['aa', 'aa']);
    expect(alg.run(['Test 2', 'Test 1', 'Test #1']).result).toEqual([
      'Test #1',
      'Test 1',
      'Test 2',
    ]);
  },
  testCustomComparator: (
    algorithm: (opts?: Options<string>) => Algorithm<string>,
    options?: Options<string>,
  ): void => {
    const algoOptions = {
      compareFunction: (val1: string, val2: string): boolean =>
        val1.length < val2.length,
      ...options,
    };
    const alg = algorithm(algoOptions);

    expect(alg.run(['']).result).toEqual(['']);
    expect(alg.run(['a']).result).toEqual(['a']);
    expect(alg.run(['aa', 'a']).result).toEqual(['a', 'aa']);
    expect(alg.run(['aa', 'z', 'bbbb', 'ccc']).result).toEqual([
      'z',
      'aa',
      'ccc',
      'bbbb',
    ]);
    expect(alg.run(['aa', 'aa']).result).toEqual(['aa', 'aa']);
  },
  testComplexity: (
    algorithm: (opts?: Options<unknown>) => Algorithm<unknown>,
    arrayToBeSorted: unknown[],
    numberOfVisits: number,
    options?: Options<unknown>,
  ): void => {
    const visitingCallback = jest.fn();
    const algoOptions = {
      visitingCallback,
      ...options,
    };
    const alg = algorithm(algoOptions);
    alg.run(arrayToBeSorted);
    expect(visitingCallback).toHaveBeenCalledTimes(numberOfVisits);
  },
  testTiming: (algorithm: () => Algorithm<number>): void => {
    const alg = algorithm();

    expect(alg.timedRun(notSortedArr).time).toBeGreaterThan(0);
  },
};

export default Tester;
