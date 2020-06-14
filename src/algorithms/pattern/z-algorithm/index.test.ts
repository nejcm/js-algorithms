import Tester from '../TestData';
import zAlgorithm from './index';

describe('ZAlgorithm', () => {
  it('should test empty values', () => {
    Tester.testWrong(zAlgorithm);
  });
  it('should search for pattern', () => {
    Tester.testStrings(zAlgorithm);
  });
  it('should search for pattern in long text', () => {
    Tester.testLongText(zAlgorithm);
  });
  it('should return time of pattern searching', () => {
    Tester.testTiming(zAlgorithm);
  });
});
