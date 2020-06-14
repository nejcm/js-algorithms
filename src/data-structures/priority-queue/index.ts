/* eslint-disable @typescript-eslint/no-empty-interface */
import createList, {LinkedList} from '../linked-list';

export interface Options {}

export interface PriorityQueue extends Options {
  items: LinkedList;
  enqueue(this: PriorityQueue, item: unknown): PriorityQueue;
  dequeue(this: PriorityQueue): unknown;
  peek(this: PriorityQueue): unknown;
  isEmpty(this: PriorityQueue): boolean;
  toString(this: PriorityQueue, separator?: string): string;
}

const queue = (options?: Options): PriorityQueue => {
  const queueList: PriorityQueue = {
    items: createList(),
    ...options,

    enqueue: function enqueue(item) {
      this.items.push(item);
      return this;
    },
    dequeue: function dequeue() {
      return this.items.shift();
    },
    peek: function peek() {
      return this.items.head?.value;
    },
    isEmpty: function isEmpty() {
      return this.items.isEmpty();
    },
    toString: function toString(separator) {
      return this.items.toString(undefined, separator);
    },
  };

  return queueList;
};

export default queue;
