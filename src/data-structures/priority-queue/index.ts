import {lessOrEqualThan} from '../../helpers/comparator';
import createHeap, {Heap, ToStringCallback} from '../heap';

export interface Item<T> {
  value: T;
  priority: number;
}
export interface PriorityQueue<T> {
  items: Heap<Item<T>>;
  size(this: PriorityQueue<T>): number;
  enqueue(this: PriorityQueue<T>, value: T, priority?: number): PriorityQueue<T>;
  dequeue(this: PriorityQueue<T>): Item<T> | undefined;
  remove(this: PriorityQueue<T>, item: T): void;
  changePriority(this: PriorityQueue<T>, item: T, priority: number): void;
  peek(this: PriorityQueue<T>): Item<T> | undefined;
  contains(this: PriorityQueue<T>, value: T): boolean;
  clear(this: PriorityQueue<T>): void;
  isEmpty(this: PriorityQueue<T>): boolean;
  toArray(this: PriorityQueue<T>): Item<T>[];
  toString(
    this: PriorityQueue<T>,
    callback?: ToStringCallback<Item<T>>,
    separator?: string,
  ): string;
}

const queue = <T>(): PriorityQueue<T> => {
  // custom compare function for the min heap
  const compareFunction = <T>(item1: Item<T>, item2: Item<T>): boolean =>
    lessOrEqualThan(item1.priority, item2.priority);

  const queueList: PriorityQueue<T> = {
    items: createHeap<Item<T>>({
      compareFunction,
    }), // linked list for the queue

    // add item to the end of the queue
    enqueue: function enqueue(value, priority = 0) {
      this.items.add({value, priority});
      return this;
    },

    // remove first item from the queue
    dequeue: function dequeue() {
      return this.items.shift();
    },

    // remove item from queue
    remove: function remove(value) {
      const indexes = this.items.find(
        {value, priority: 0},
        (item, needle) => item.value === needle.value,
      );
      indexes.forEach((index) => this.items.remove(index));
      return this;
    },

    // change priority of an item
    changePriority: function changePriority(value, priority) {
      const updatedItem = {value, priority};
      const indexes = this.items.find(
        updatedItem,
        (item, needle) => item.value === needle.value,
      );
      indexes.forEach((index) => this.items.update(index, updatedItem));
      return this;
    },

    // get first item in queue
    peek: function peek() {
      return this.items.peek();
    },

    // check if value in queue
    contains: function contains(value) {
      return this.items.contains(
        {value, priority: 0},
        (item, needle) => item.value === needle.value,
      );
    },

    // check if the queue is empty
    isEmpty: function isEmpty() {
      return this.items.isEmpty();
    },

    // convert queue to array
    toArray: function toArray() {
      return this.items.items;
    },

    // get queue size
    size: function size() {
      return this.items.items.length || 0;
    },

    // clear queue
    clear: function clear() {
      this.items.items = [];
    },

    // convert queue to string
    toString: function toString(
      callback = (item: Item<T>) => String(item.value),
      separator = ', ',
    ) {
      return this.items.toString(callback, separator);
    },
  };

  return queueList;
};

export default queue;
