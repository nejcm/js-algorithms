import Tester from '../TestData';
import bucketSort from './index';

describe('BucketSort', () => {
  it('should sort array', () => {
    Tester.testNumbers(bucketSort);
  });

  it('should sort array', () => {
    Tester.testDecimalNumbers(bucketSort);
  });

  it('should sort negative numbers', () => {
    Tester.testNegativeNumbers(bucketSort);
  });

  it('should return time of array sorting', () => {
    Tester.testTiming(bucketSort);
  });
});
