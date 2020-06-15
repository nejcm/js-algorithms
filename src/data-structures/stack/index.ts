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
