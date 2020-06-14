import Tester from '../TestData';
import rabinKarp from './index';

describe('RabinKarp', () => {
  it('should test empty values', () => {
    Tester.testWrong(rabinKarp);
  });
  it('should search for pattern', () => {
    Tester.testStrings(rabinKarp);
  });
  it('should search for pattern in long text', () => {
    Tester.testLongText(rabinKarp);
  });
  it('should return time of pattern searching', () => {
    Tester.testTiming(rabinKarp);
  });
});
