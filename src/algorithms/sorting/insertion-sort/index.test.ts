import Tester, {equalArr, notSortedArr, reverseArr, sortedArr} from '../TestData';
import insertionSort from './index';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 38;
const NOT_SORTED_ARRAY_VISITING_COUNT = 116;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 209;
const EQUAL_ARRAY_VISITING_COUNT = 38;

describe('InsertionSort', () => {
  it('should sort array', () => {
    Tester.testNumbers(insertionSort);
  });

  it('should sort array with strings', () => {
    Tester.testStrings(insertionSort);
  });

  it('should sort negative numbers', () => {
    Tester.testNegativeNumbers(insertionSort);
  });

  it('should sort array with custom comparator', () => {
    Tester.testCustomComparator(insertionSort);
  });

  it('should visit EQUAL array element specified number of times', () => {
    Tester.testComplexity(insertionSort, equalArr, EQUAL_ARRAY_VISITING_COUNT);
  });

  it('should visit SORTED array element specified number of times', () => {
    Tester.testComplexity(insertionSort, sortedArr, SORTED_ARRAY_VISITING_COUNT);
  });

  it('should return time of array sorting', () => {
    Tester.testTiming(insertionSort);
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    Tester.testComplexity(insertionSort, notSortedArr, NOT_SORTED_ARRAY_VISITING_COUNT);
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    Tester.testComplexity(insertionSort, reverseArr, REVERSE_SORTED_ARRAY_VISITING_COUNT);
  });
});
