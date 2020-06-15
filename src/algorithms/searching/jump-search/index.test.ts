import Tester from '../TestData';
import jumpSearch from './index';

describe('JumpSearch', () => {
  it('should test empty values', () => {
    Tester.testEmpty(jumpSearch);
  });
  it('should search array with sorted numbers', () => {
    Tester.testSortedNumbers(jumpSearch);
  });
});
