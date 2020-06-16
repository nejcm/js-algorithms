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

    // add a new item to the start
    push: function push(item) {
      this.items.unshift(item);
      return this;
    },

    // remove item from the start
    pop: function pop() {
      return this.items.shift();
    },

    // get first item on the stack
    peek: function peek() {
      return this.items[0] || undefined;
    },

    // check if the stack is empty
    isEmpty: function isEmpty() {
      return !this.items.length;
    },

    // convert the stack to string
    toString: function toString(separator = ' -> ') {
      return this.items.join(separator);
    },
  };

  return stackArray;
};

export default stack;
