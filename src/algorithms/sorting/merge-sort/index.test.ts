import Tester, {equalArr, notSortedArr, reverseArr, sortedArr} from '../TestData';
import mergeSort from './index';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 59;
const NOT_SORTED_ARRAY_VISITING_COUNT = 82;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 67;
const EQUAL_ARRAY_VISITING_COUNT = 67;

describe('MergeSort', () => {
  it('should sort array', () => {
    Tester.testNumbers(mergeSort);
  });

  it('should sort array with strings', () => {
    Tester.testStrings(mergeSort);
  });

  it('should sort negative numbers', () => {
    Tester.testNegativeNumbers(mergeSort);
  });

  it('should sort array with custom comparator', () => {
    Tester.testCustomComparator(mergeSort);
  });

  it('should visit EQUAL array element specified number of times', () => {
    Tester.testComplexity(mergeSort, equalArr, EQUAL_ARRAY_VISITING_COUNT);
  });

  it('should visit SORTED array element specified number of times', () => {
    Tester.testComplexity(mergeSort, sortedArr, SORTED_ARRAY_VISITING_COUNT);
  });

  it('should return time of array sorting', () => {
    Tester.testTiming(mergeSort);
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    Tester.testComplexity(mergeSort, notSortedArr, NOT_SORTED_ARRAY_VISITING_COUNT);
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    Tester.testComplexity(mergeSort, reverseArr, REVERSE_SORTED_ARRAY_VISITING_COUNT);
  });
});
