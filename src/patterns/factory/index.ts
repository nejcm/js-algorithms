/* eslint-disable @typescript-eslint/no-explicit-any */
export class BubbleSort {
  constructor(public values: number[]) {}
}

export class QuickSort {
  constructor(public values: number[], public type: string) {}
}

// Algorithm Factory
class AlgorithmFactory {
  createAlgorithm(
    type: 'bubble-sort' | 'quick-sort',
    props: Record<string, any>,
  ): BubbleSort | QuickSort | undefined {
    switch (type) {
      case 'bubble-sort':
        return new BubbleSort(props.values);
      case 'quick-sort':
        return new QuickSort(props.values, props.type);
      default:
        // noop
        return undefined;
    }
  }
}

export default AlgorithmFactory;
