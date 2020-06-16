import createList, {LinkedList} from '../linked-list';

export interface Queue<T> {
  items: LinkedList<T>;
  enqueue(this: Queue<T>, item: T): Queue<T>;
  dequeue(this: Queue<T>): T | undefined;
  peek(this: Queue<T>): T | undefined;
  isEmpty(this: Queue<T>): boolean;
  toString(this: Queue<T>, separator?: string): string;
}

const queue = <T>(): Queue<T> => {
  const queueList: Queue<T> = {
    items: createList(), // linked list for the queue

    // add item to the end
    enqueue: function enqueue(item) {
      this.items.push(item);
      return this;
    },

    // remove the first item
    dequeue: function dequeue() {
      return this.items.shift();
    },

    // get first item
    peek: function peek() {
      return this.items.head?.value;
    },

    // check if the queue is empty
    isEmpty: function isEmpty() {
      return this.items.isEmpty();
    },

    // convert queue to string
    toString: function toString(separator) {
      return this.items.toString(undefined, separator);
    },
  };

  return queueList;
};

export default queue;
