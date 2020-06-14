import Tester from '../TestData';
import linearSearch from './index';

describe('LinearSearch', () => {
  it('should test empty values', () => {
    Tester.testEmpty(linearSearch);
  });
  it('should search array with numbers', () => {
    Tester.testNumbers(linearSearch);
  });

  it('should search array with sorted numbers', () => {
    Tester.testSortedNumbers(linearSearch);
  });

  it('should search array with strings', () => {
    Tester.testStrings(linearSearch);
  });

  it('should search array with custom comparator', () => {
    Tester.testCustomComparator(linearSearch);
  });

  it('should return time of array searching', () => {
    Tester.testTiming(linearSearch);
  });
});
