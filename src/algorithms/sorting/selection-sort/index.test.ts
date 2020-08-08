import Tester, {equalArr, notSortedArr, reverseArr, sortedArr} from '../TestData';
import selectionSort from './index';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 209;
const NOT_SORTED_ARRAY_VISITING_COUNT = 209;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 209;
const EQUAL_ARRAY_VISITING_COUNT = 209;

describe('SelectionSort', () => {
  it('should sort array', () => {
    Tester.testNumbers(selectionSort);
  });

  it('should sort array with strings', () => {
    Tester.testStrings(selectionSort);
  });

  it('should sort negative numbers', () => {
    Tester.testNegativeNumbers(selectionSort);
  });

  it('should sort array with custom comparator', () => {
    Tester.testCustomComparator(selectionSort);
  });

  it('should visit EQUAL array element specified number of times', () => {
    Tester.testComplexity(selectionSort, equalArr, EQUAL_ARRAY_VISITING_COUNT);
  });

  it('should visit SORTED array element specified number of times', () => {
    Tester.testComplexity(selectionSort, sortedArr, SORTED_ARRAY_VISITING_COUNT);
  });

  it('should return time of array sorting', () => {
    Tester.testTiming(selectionSort);
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    Tester.testComplexity(selectionSort, notSortedArr, NOT_SORTED_ARRAY_VISITING_COUNT);
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    Tester.testComplexity(selectionSort, reverseArr, REVERSE_SORTED_ARRAY_VISITING_COUNT);
  });
});
