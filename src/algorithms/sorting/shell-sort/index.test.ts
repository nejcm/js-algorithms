import Tester, {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
} from '../TestData';
import shellSort from './index';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 62;
const NOT_SORTED_ARRAY_VISITING_COUNT = 93;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 98;
const EQUAL_ARRAY_VISITING_COUNT = 62;

describe('ShellSort', () => {
  it('should sort array', () => {
    Tester.testNumbers(shellSort);
  });

  it('should sort array with strings', () => {
    Tester.testStrings(shellSort);
  });

  it('should sort negative numbers', () => {
    Tester.testNegativeNumbers(shellSort);
  });

  it('should sort array with custom comparator', () => {
    Tester.testCustomComparator(shellSort);
  });

  it('should visit EQUAL array element specified number of times', () => {
    Tester.testComplexity(shellSort, equalArr, EQUAL_ARRAY_VISITING_COUNT);
  });

  it('should visit SORTED array element specified number of times', () => {
    Tester.testComplexity(shellSort, sortedArr, SORTED_ARRAY_VISITING_COUNT);
  });

  it('should return time of array sorting', () => {
    Tester.testTiming(shellSort);
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    Tester.testComplexity(
      shellSort,
      notSortedArr,
      NOT_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    Tester.testComplexity(
      shellSort,
      reverseArr,
      REVERSE_SORTED_ARRAY_VISITING_COUNT,
    );
  });
});
