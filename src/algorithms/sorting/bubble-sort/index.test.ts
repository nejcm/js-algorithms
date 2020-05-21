import Tester, {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
} from '../TestData';
import bubbleSort from './index';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 20;
const NOT_SORTED_ARRAY_VISITING_COUNT = 189;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 209;
const EQUAL_ARRAY_VISITING_COUNT = 20;

describe('BubbleSort', () => {
  it('should sort array', () => {
    Tester.testNumbers(bubbleSort);
  });

  it('should sort array with strings', () => {
    Tester.testStrings(bubbleSort);
  });

  it('should sort negative numbers', () => {
    Tester.testNegativeNumbers(bubbleSort);
  });

  it('should sort array with custom comparator', () => {
    Tester.testCustomComparator(bubbleSort);
  });

  it('should visit EQUAL array element specified number of times', () => {
    Tester.testComplexity(bubbleSort, equalArr, EQUAL_ARRAY_VISITING_COUNT);
  });

  it('should visit SORTED array element specified number of times', () => {
    Tester.testComplexity(bubbleSort, sortedArr, SORTED_ARRAY_VISITING_COUNT);
  });

  it('should return time of array sorting', () => {
    Tester.testTiming(bubbleSort);
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    Tester.testComplexity(
      bubbleSort,
      notSortedArr,
      NOT_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    Tester.testComplexity(
      bubbleSort,
      reverseArr,
      REVERSE_SORTED_ARRAY_VISITING_COUNT,
    );
  });
});
