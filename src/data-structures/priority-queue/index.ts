import {lessOrEqualThan} from '../../helpers/comparator';
import createHeap, {Heap, ToStringCallback} from '../heap';

export interface Item<T> {
  value: T;
  priority: number;
}
export interface PriorityQueue<T> {
  items: Heap<Item<T>>;
  enqueue(
    this: PriorityQueue<T>,
    value: T,
    priority?: number,
  ): PriorityQueue<T>;
  dequeue(this: PriorityQueue<T>): T | undefined;
  changePriority(this: PriorityQueue<T>, item: T, priority: number): void;
  peek(this: PriorityQueue<T>): T | undefined;
  isEmpty(this: PriorityQueue<T>): boolean;
  toString(
    this: PriorityQueue<T>,
    callback?: ToStringCallback<Item<T>>,
    separator?: string,
  ): string;
}

// custom compare function for the min heap
const compareFunction = <T>(item1: Item<T>, item2: Item<T>): boolean =>
  lessOrEqualThan(item1.priority, item2.priority);
// custom toString function
const convertToString = <T>(item: Item<T>) => String(item.value);

const queue = <T>(): PriorityQueue<T> => {
  const queueList: PriorityQueue<T> = {
    items: createHeap<Item<T>>({compareFunction}), // linked list for the queue

    // add item to the end of the queue
    enqueue: function enqueue(value, priority = 0) {
      this.items.add({value, priority});
      return this;
    },

    // remove first item from the queue
    dequeue: function dequeue() {
      return this.items.shift()?.value;
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
      return this.items.peek()?.value;
    },

    // check if the queue is empty
    isEmpty: function isEmpty() {
      return this.items.isEmpty();
    },

    // convert queue to string
    toString: function toString(callback, separator = ', ') {
      return this.items.toString(callback || convertToString, separator);
    },
  };

  return queueList;
};

export default queue;
