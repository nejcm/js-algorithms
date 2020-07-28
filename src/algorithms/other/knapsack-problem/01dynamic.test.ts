import knapsack from './01dynamic';
import Tester from './TestData';

describe('KnapsackProblem01Dynamic', () => {
  it('should return empty for no items', () => {
    Tester.testEmpty(knapsack);
  });

  it('should solve impossible knapsack problem', () => {
    Tester.testImpossible(knapsack);
  });

  it('should solve knapsack problem with equal weights', () => {
    Tester.testEqualWeight(knapsack);
  });

  it('should give same result to knapsack problem with different items order', () => {
    Tester.testWithDifferentOrder(knapsack);
  });

  it('should solve knapsack problem', () => {
    Tester.test(knapsack);
  });

  it('should solve knapsack problem #2', () => {
    Tester.test2(knapsack);
  });

  it('should solve knapsack problem #3', () => {
    Tester.test3(knapsack);
  });

  it('should solve 0/1 knapsack problem', () => {
    Tester.test01(knapsack);
  });

  it('should solve 0/1 knapsack problem #2', () => {
    Tester.test012(knapsack);
  });
});
