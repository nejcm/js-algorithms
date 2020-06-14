import Tester from '../TestData';
import naiveAlgorithm from './index';

describe('NaiveSearchAlgorithm', () => {
  it('should test empty values', () => {
    Tester.testWrong(naiveAlgorithm);
  });
  it('should search for pattern', () => {
    Tester.testStrings(naiveAlgorithm);
  });
  it('should search for pattern in long text', () => {
    Tester.testLongText(naiveAlgorithm);
  });
  it('should return time of pattern searching', () => {
    Tester.testTiming(naiveAlgorithm);
  });
});
