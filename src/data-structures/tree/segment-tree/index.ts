export type Meta = {[key: string]: unknown};
export interface Options {
  // tree will be constructed based on this operation (sum, max, min)
  operation: (a: number, b: number) => number;
  fallback: number;
}
export interface SegmentTree {
  values: number[];
  nodes: number[];
  rangeQuery(
    this: SegmentTree,
    left: number,
    right: number,
  ): number | undefined;
}

const segmentTree = (values: number[], options?: Options): SegmentTree => {
  const opts: Options = {
    operation: (a, b) => a + b,
    fallback: 0,
    ...options,
  };

  const getLeftChildIndex = (parent: number): number => 2 * parent + 1;
  const getRightChildIndex = (parent: number): number => 2 * parent + 2;
  const buildTree = (
    nodes: number[],
    left: number,
    right: number,
    index: number,
  ): number[] => {
    // if only one element left in array
    // store it in current node
    if (left === right) {
      nodes[index] = values[left];
      return nodes;
    }

    // split array into halves
    const mid = Math.floor((left + right) / 2);
    // left half
    buildTree(nodes, left, mid, getLeftChildIndex(index));
    // right half
    buildTree(nodes, mid + 1, right, getRightChildIndex(index));

    // build tree bottom up
    nodes[index] = opts.operation(
      nodes[getLeftChildIndex(index)],
      nodes[getRightChildIndex(index)],
    );
    return nodes;
  };

  const length = values.length;
  let nodes = values;
  if (length > 0) {
    // calculate tree size
    let currentPower = Math.log2(length);
    currentPower =
      currentPower % 1 === 0 ? currentPower : Math.floor(currentPower) + 1;
    const power2 = 2 ** currentPower;
    const treeSize = 2 * power2 - 1;
    // build tree
    const arr = new Array(treeSize).fill(null);
    nodes = buildTree(arr, 0, length - 1, 0);
  }

  const treeObj: SegmentTree = {
    values,
    nodes,

    // query range
    rangeQuery: function rangeQuery(queryLeftIndex, queryRightIndex) {
      const rangeQueryRecursive = (
        qLeftIndex: number,
        qRightIndex: number,
        leftIndex: number,
        rightIndex: number,
        position: number,
      ): number => {
        // if range overlaps
        if (qLeftIndex <= leftIndex && qRightIndex >= rightIndex) {
          return this.nodes[position];
        }
        // if outside of the range
        if (qLeftIndex > rightIndex || qRightIndex < leftIndex) {
          return opts.fallback;
        }
        // if range partially overlaps
        const mid = Math.floor((leftIndex + rightIndex) / 2);
        const leftResult = rangeQueryRecursive(
          qLeftIndex,
          qRightIndex,
          leftIndex,
          mid,
          getLeftChildIndex(position),
        );
        const rightResult = rangeQueryRecursive(
          qLeftIndex,
          qRightIndex,
          mid + 1,
          rightIndex,
          getRightChildIndex(position),
        );
        return opts.operation(leftResult, rightResult);
      };
      if (queryLeftIndex > queryRightIndex) {
        [queryLeftIndex, queryRightIndex] = [queryRightIndex, queryLeftIndex];
      }
      if (queryLeftIndex < 0 || queryRightIndex > this.values.length - 1) {
        return undefined;
      }
      return rangeQueryRecursive(
        queryLeftIndex,
        queryRightIndex,
        0,
        this.values.length - 1,
        0,
      );
    },
  };

  return treeObj;
};

export default segmentTree;
