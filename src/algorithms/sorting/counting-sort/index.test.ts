import Tester from '../TestData';
import countingSort from './index';

describe('CountinSort', () => {
  it('should sort array', () => {
    Tester.testNumbers(countingSort);
  });

  it('should sort negative numbers', () => {
    Tester.testNegativeNumbers(countingSort);
  });

  it('should return time of array sorting', () => {
    Tester.testTiming(countingSort);
  });
});
