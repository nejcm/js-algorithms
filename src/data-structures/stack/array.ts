/* eslint-disable @typescript-eslint/no-empty-interface */
export interface Options {}

export interface Stack extends Options {
  items: unknown[];
  push(this: Stack, item: unknown): Stack;
  pop(this: Stack): unknown;
  peek(this: Stack): unknown;
  isEmpty(this: Stack): boolean;
  toString(this: Stack, separator?: string): string;
}

const stack = (options?: Options): Stack => {
  const stackArray: Stack = {
    items: [],
    ...options,

    push: function push(item) {
      this.items.unshift(item);
      return this;
    },
    pop: function pop() {
      return this.items.shift();
    },
    peek: function peek() {
      return this.items[0] || undefined;
    },
    isEmpty: function isEmpty() {
      return !this.items.length;
    },
    toString: function toString(separator = ' -> ') {
      return this.items.join(separator);
    },
  };

  return stackArray;
};

export default stack;
