import createList, {LinkedList} from '../linked-list';

export interface PriorityQueue<T> {
  items: LinkedList<T>;
  enqueue(this: PriorityQueue<T>, item: T): PriorityQueue<T>;
  dequeue(this: PriorityQueue<T>): T | undefined;
  peek(this: PriorityQueue<T>): T | undefined;
  isEmpty(this: PriorityQueue<T>): boolean;
  toString(this: PriorityQueue<T>, separator?: string): string;
}

const queue = <T>(): PriorityQueue<T> => {
  const queueList: PriorityQueue<T> = {
    items: createList(),

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
