import Tester from '../TestData';
import lsdRadixSort from './index';

describe('RadixSort', () => {
  it('should return original array if wrong data type', () => {
    const alg = lsdRadixSort();
    const array1 = [true, false, true];
    expect(alg.run(array1).result).toEqual(array1);
    const array2 = [{v: 1}, {v: 0}];
    expect(alg.run(array2).result).toEqual(array2);
  });

  it('should sort array', () => {
    Tester.testNumbers(lsdRadixSort);
  });

  it('should sort array with strings', () => {
    Tester.testStrings(lsdRadixSort);
  });

  it('should sort negative numbers', () => {
    Tester.testNegativeNumbers(lsdRadixSort);
  });

  it('should return time of array sorting', () => {
    Tester.testTiming(lsdRadixSort);
  });
});
