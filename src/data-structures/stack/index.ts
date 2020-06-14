/* eslint-disable @typescript-eslint/no-empty-interface */
import createList, {LinkedList} from '../linked-list';

export interface Options {}

export interface Stack extends Options {
  items: LinkedList;
  push(this: Stack, item: unknown): Stack;
  pop(this: Stack): unknown;
  peek(this: Stack): unknown;
  isEmpty(this: Stack): boolean;
  toString(this: Stack, separator?: string): string;
}

const stack = (options?: Options): Stack => {
  const stackList: Stack = {
    items: createList(),
    ...options,

    push: function push(item) {
      this.items.unshift(item);
      return this;
    },
    pop: function pop() {
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

  return stackList;
};

export default stack;
