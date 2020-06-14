import Tester from '../TestData';
import boyerMoore from './index';

describe('BoyerMoore', () => {
  it('should test empty values', () => {
    Tester.testWrong(boyerMoore);
  });
  it('should search for pattern', () => {
    Tester.testStrings(boyerMoore);
  });
  it('should search for pattern in long text', () => {
    Tester.testLongText(boyerMoore);
  });
  it('should return time of pattern searching', () => {
    Tester.testTiming(boyerMoore);
  });
});
