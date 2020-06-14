import Tester from '../TestData';
import binarySearch from './index';

describe('BinarySearch', () => {
  it('should test empty values', () => {
    Tester.testEmpty(binarySearch);
  });
  it('should search array with sorted numbers', () => {
    Tester.testSortedNumbers(binarySearch);
  });
});
