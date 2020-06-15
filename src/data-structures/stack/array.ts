export interface Stack<T> {
  items: T[];
  push(this: Stack<T>, item: T): Stack<T>;
  pop(this: Stack<T>): T | undefined;
  peek(this: Stack<T>): T | undefined;
  isEmpty(this: Stack<T>): boolean;
  toString(this: Stack<T>, separator?: string): string;
}

const stack = <T>(): Stack<T> => {
  const stackArray: Stack<T> = {
    items: [],

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
