import Tester from '../TestData';
import knuthMorrisPratt from './index';

describe('KnuthMorrisPratt', () => {
  it('should test empty values', () => {
    Tester.testWrong(knuthMorrisPratt);
  });
  it('should search for pattern', () => {
    Tester.testStrings(knuthMorrisPratt);
  });
  it('should search for pattern in long text', () => {
    Tester.testLongText(knuthMorrisPratt);
  });
  it('should return time of pattern searching', () => {
    Tester.testTiming(knuthMorrisPratt);
  });
});
