/* eslint-disable @typescript-eslint/no-empty-interface */
import createList, {LinkedList} from '../linked-list';

export interface Options {}

export interface Queue extends Options {
  items: LinkedList;
  enqueue(this: Queue, item: unknown): Queue;
  dequeue(this: Queue): unknown;
  peek(this: Queue): unknown;
  isEmpty(this: Queue): boolean;
  toString(this: Queue, separator?: string): string;
}

const queue = (options?: Options): Queue => {
  const queueList: Queue = {
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
