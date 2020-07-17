import travellingSalesman from './branch&Bound';
import Tester from './TestData';

describe('TravellingSalesmanBranch&Bound', () => {
  it('should test empty and directed graph', () => {
    Tester.testEmpty(travellingSalesman);
  });

  it('should find min path in graph', () => {
    Tester.testFound(travellingSalesman);
  });

  it('should return empty for graph without cycle', () => {
    Tester.testNotFound(travellingSalesman);
  });
});
