import Tester, {equalArr, notSortedArr, reverseArr, sortedArr} from '../TestData';
import heapSort from './index';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 20;
const NOT_SORTED_ARRAY_VISITING_COUNT = 20;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 20;
const EQUAL_ARRAY_VISITING_COUNT = 20;

describe('HeapSort', () => {
  it('should sort array', () => {
    Tester.testNumbers(heapSort);
  });

  it('should sort array with strings', () => {
    Tester.testStrings(heapSort);
  });

  it('should sort negative numbers', () => {
    Tester.testNegativeNumbers(heapSort);
  });

  it('should sort array with custom comparator', () => {
    Tester.testCustomComparator(heapSort);
  });

  it('should visit EQUAL array element specified number of times', () => {
    Tester.testComplexity(heapSort, equalArr, EQUAL_ARRAY_VISITING_COUNT);
  });

  it('should visit SORTED array element specified number of times', () => {
    Tester.testComplexity(heapSort, sortedArr, SORTED_ARRAY_VISITING_COUNT);
  });

  it('should return time of array sorting', () => {
    Tester.testTiming(heapSort);
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    Tester.testComplexity(heapSort, notSortedArr, NOT_SORTED_ARRAY_VISITING_COUNT);
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    Tester.testComplexity(heapSort, reverseArr, REVERSE_SORTED_ARRAY_VISITING_COUNT);
  });
});
