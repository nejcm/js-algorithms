import Tester from '../TestData';
import interpolationSearch from './index';

describe('InterpolationSearch', () => {
  it('should test empty values', () => {
    Tester.testEmpty(interpolationSearch);
  });
  it('should search array with sorted numbers', () => {
    Tester.testSortedNumbers(interpolationSearch);
  });
});
