import AlgorithmFactory, {BubbleSort, QuickSort} from './';

describe('Factory', () => {
  it('should create an algorithm', () => {
    const factory = new AlgorithmFactory();

    const algorithm = factory.createAlgorithm('bubble-sort', {values: [1, 5, 2]});
    expect(algorithm instanceof BubbleSort).toBeTruthy();

    const algorithm2 = factory.createAlgorithm('quick-sort', {
      values: [1, 5, 2],
      type: 'test',
    });
    expect(algorithm2 instanceof QuickSort).toBeTruthy();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const algorithm3 = factory.createAlgorithm('missing' as any, {values: [1, 5, 2]});
    expect(algorithm3).toBeUndefined();
  });
});
