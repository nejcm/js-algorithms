export interface Options {
  size?: number;
}
export interface FenWickTree {
  size: number;
  nodes: number[];
  increase(this: FenWickTree, position: number, value: number): FenWickTree;
  query(this: FenWickTree, position: number): number;
  queryRange(this: FenWickTree, left: number, right: number): number;
}

const tree = (options?: Options): FenWickTree => {
  const size = options?.size || 20;
  const treeObj: FenWickTree = {
    size,
    nodes: Array(size + 1).fill(0),

    // increase value at position
    increase: function increase(position, value) {
      if (position < 1 || position > this.size) {
        throw new Error('Position is out of range.');
      }

      for (let i = position; i <= this.size; i += i & -i) {
        this.nodes[i] += value;
      }
      return this;
    },

    // query sum from index 1 to position.
    query: function query(position) {
      if (position < 1 || position > this.size) {
        throw new Error('Position is out of range.');
      }

      let sum = 0;
      for (let i = position; i > 0; i -= i & -i) {
        sum += this.nodes[i];
      }
      return sum;
    },

    // query sum from index 1 to position.
    queryRange: function queryRange(left, right) {
      if (left > right) {
        throw new Error('Left index can not be greater than right index.');
      }

      if (left === 1) {
        return this.query(right);
      }
      return this.query(right) - this.query(left - 1);
    },
  };

  return treeObj;
};

export default tree;
