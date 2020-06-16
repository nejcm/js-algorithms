import createList, {LinkedList} from '../linked-list';

export interface Stack<T> {
  items: LinkedList<T>;
  push(this: Stack<T>, item: T): Stack<T>;
  pop(this: Stack<T>): T | undefined;
  peek(this: Stack<T>): T | undefined;
  isEmpty(this: Stack<T>): boolean;
  toString(this: Stack<T>, separator?: string): string;
}

const stack = <T>(): Stack<T> => {
  const stackList: Stack<T> = {
    items: createList(),

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
      return this.items.head?.value;
    },

    // check if the stack is empty
    isEmpty: function isEmpty() {
      return this.items.isEmpty();
    },

    // convert the stack to string
    toString: function toString(separator) {
      return this.items.toString(undefined, separator);
    },
  };

  return stackList;
};

export default stack;
