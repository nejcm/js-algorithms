import {equalThan, lessOrEqualThan} from '../../helpers/comparator';

export type CompareFunction<T> = (val1: T, val2: T) => boolean;
export type ToStringCallback<T> = (current: T, index: number) => string;
export interface Options<T> {
  compareFunction?: CompareFunction<T>;
}
export interface Heap<T> {
  items: T[];
  parentIndex(this: Heap<T>, childIndex: number): number;
  hasParent(this: Heap<T>, childIndex: number): boolean;
  parent(this: Heap<T>, parentIndex: number): T;
  leftChildIndex(this: Heap<T>, parentIndex: number): number;
  hasLeftChild(this: Heap<T>, parentIndex: number): boolean;
  leftChild(this: Heap<T>, parentIndex: number): T | undefined;
  rightChildIndex(this: Heap<T>, parentIndex: number): number;
  hasRightChild(this: Heap<T>, parentIndex: number): boolean;
  rightChild(this: Heap<T>, parentIndex: number): T | undefined;
  swap(this: Heap<T>, index1: number, index2: number): void;
  peek(this: Heap<T>): T | undefined;
  shift(this: Heap<T>): T | undefined;
  add(this: Heap<T>, element: T): Heap<T>;
  remove(this: Heap<T>, index?: number): Heap<T>;
  find(
    this: Heap<T>,
    element: T,
    compareCallback?: (heapItem: T, searchedItem: T) => boolean,
  ): number[];
  update(this: Heap<T>, index: number, value: T): Heap<T>;
  heapify(this: Heap<T>, index: number): Heap<T>;
  heapifyUp(this: Heap<T>, startIndex?: number): Heap<T>;
  heapifyDown(this: Heap<T>, startIndex?: number): Heap<T>;
  isEmpty(this: Heap<T>): boolean;
  toString(
    this: Heap<T>,
    callback?: ToStringCallback<T>,
    separator?: string,
  ): string;
}

const heap = <T>(options?: Options<T>): Heap<T> => {
  const opts: {compareFunction: CompareFunction<T>} = {
    compareFunction: lessOrEqualThan, // by default min-heap
    ...options,
  };
  const heapObj: Heap<T> = {
    items: [],

    // get parent node index
    parentIndex: function parentIndex(i) {
      return Math.floor((i - 1) / 2);
    },

    // check if node has a parent
    hasParent: function hasParent(i) {
      return this.parentIndex(i) >= 0;
    },

    // get parent node
    parent: function parent(i) {
      return this.items[this.parentIndex(i)];
    },

    // get left child node index
    leftChildIndex: function leftChildIndex(i) {
      return 2 * i + 1;
    },

    // check if node has a left child
    hasLeftChild: function hasLeftChild(i) {
      return this.leftChildIndex(i) < this.items.length;
    },

    // get left child node
    leftChild: function leftChild(i) {
      return this.items[this.leftChildIndex(i)];
    },

    // get right child node index
    rightChildIndex: function rightChildIndex(i) {
      return 2 * i + 2;
    },

    // check if node has a right child
    hasRightChild: function hasRightChild(i) {
      return this.rightChildIndex(i) < this.items.length;
    },

    // get right child node
    rightChild: function rightChild(i) {
      return this.items[this.rightChildIndex(i)];
    },

    // swap two nodes
    swap: function swap(i1, i2) {
      [this.items[i1], this.items[i2]] = [this.items[i2], this.items[i1]];
    },

    // get first node
    peek: function peek() {
      return this.items.length ? this.items[0] : undefined;
    },

    // get and remove first node
    shift: function shift() {
      if (!this.items.length) {
        return undefined;
      }
      // if only one node in the heap
      if (this.items.length === 1) {
        return this.items.shift();
      }

      const element = this.items[0];
      // move the last element to the start.
      this.items[0] = this.items.pop() as T;
      this.heapifyDown();
      return element;
    },

    // add a new node
    add: function add(element) {
      this.items.push(element);
      this.heapifyUp();
      return this;
    },

    // remove a node at index
    remove: function remove(index = 0) {
      if (index < 0 || index >= this.items.length) {
        return this;
      }

      // if only one node in the heap
      if (index === this.items.length - 1) {
        this.items.pop();
        return this;
      }

      // move last element to the removed position.
      this.items[index] = this.items.pop() as T;
      // heapify
      this.heapify(index);

      return this;
    },

    update: function update(index, value) {
      if (index < 0 || index >= this.items.length) {
        return this;
      }
      // update element
      this.items[index] = value;
      // heapify
      this.heapify(index);
      return this;
    },

    // find a node
    find: function find(element, compareCallback = equalThan) {
      const found = [];
      for (let i = 0; i < this.items.length; i++) {
        if (compareCallback(this.items[i], element)) {
          found.push(i);
        }
      }
      return found;
    },

    // heapifys up or down if needed
    heapify: function heapify(index) {
      // heapify
      const parent = this.parent(index);
      // if there is no parent or parent is in correct order
      // we're going to heapify down otherwise heapify up.
      if (
        this.hasLeftChild(index) &&
        (!parent || opts.compareFunction(parent, this.items[index]))
      ) {
        this.heapifyDown(index);
        return this;
      }
      this.heapifyUp(index);
      return this;
    },

    // heapify up
    heapifyUp: function heapifyUp(startIndex) {
      let index = startIndex || this.items.length - 1;
      // while there is a parent and out of order
      while (
        this.hasParent(index) &&
        !opts.compareFunction(this.parent(index), this.items[index])
      ) {
        const parentIndex = this.parentIndex(index);
        this.swap(parentIndex, index);
        index = parentIndex;
      }
      return this;
    },

    // heapify down
    heapifyDown: function heapifyDown(startIndex = 0) {
      let index = startIndex;
      // while there is a left child
      while (this.hasLeftChild(index)) {
        // which node should be swapped
        let nextIndex = this.leftChildIndex(index);
        if (
          this.hasRightChild(index) &&
          opts.compareFunction(
            this.rightChild(index) as T,
            this.leftChild(index) as T,
          )
        ) {
          nextIndex = this.rightChildIndex(index);
        }

        // if nodes are in order do no swap
        if (opts.compareFunction(this.items[index], this.items[nextIndex])) {
          break;
        }

        this.swap(index, nextIndex);
        index = nextIndex;
      }
      return this;
    },

    // check if the heap is empty
    isEmpty: function isEmpty() {
      return !this.items.length;
    },

    // convert the heap to string
    toString: function toString(callback?, separator = ', ') {
      const len = this.items.length;
      const str = this.items.reduce((accumulator: string, current, i) => {
        accumulator += callback ? callback(current, i) : String(current);
        if (i < len - 1) {
          accumulator += separator;
        }
        return accumulator;
      }, '');
      return str;
    },
  };

  return heapObj;
};

export default heap;
