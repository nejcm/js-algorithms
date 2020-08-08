import Tester, {equalArr, notSortedArr, reverseArr, sortedArr} from '../TestData';
import quickSort, {PivotMode, QuickSortOptions} from './index';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 190;
const NOT_SORTED_ARRAY_VISITING_COUNT = 62;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 190;
const EQUAL_ARRAY_VISITING_COUNT = 19;

describe('MergeSort', () => {
  it('should sort array', () => {
    Tester.testNumbers(quickSort);
  });

  it('should sort array with last element as pivot', () => {
    const options: QuickSortOptions<number> = {
      pivot: PivotMode.Last,
    };
    Tester.testNumbers(quickSort, options);
  });

  it('should sort array with middle element as pivot', () => {
    const options: QuickSortOptions<number> = {
      pivot: PivotMode.Middle,
    };
    Tester.testNumbers(quickSort, options);
  });

  it('should sort array with strings', () => {
    Tester.testStrings(quickSort);
  });

  it('should sort negative numbers', () => {
    Tester.testNegativeNumbers(quickSort);
  });

  it('should sort array with custom comparator', () => {
    Tester.testCustomComparator(quickSort);
  });

  it('should visit EQUAL array element specified number of times', () => {
    Tester.testComplexity(quickSort, equalArr, EQUAL_ARRAY_VISITING_COUNT);
  });

  it('should visit SORTED array element specified number of times', () => {
    Tester.testComplexity(quickSort, sortedArr, SORTED_ARRAY_VISITING_COUNT);
  });

  it('should return time of array sorting', () => {
    Tester.testTiming(quickSort);
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    Tester.testComplexity(quickSort, notSortedArr, NOT_SORTED_ARRAY_VISITING_COUNT);
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    Tester.testComplexity(quickSort, reverseArr, REVERSE_SORTED_ARRAY_VISITING_COUNT);
  });
});
