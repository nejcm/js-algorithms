export type ToStringCallback<T> = (current: Node<T>) => string;
export interface NodeProps<T> {
  value: T;
  next?: Node<T> | null;
  prev?: Node<T> | null;
}
export interface Node<T> extends NodeProps<T> {
  next: Node<T> | null;
  prev: Node<T> | null;
  toString: (callback?: ToStringCallback<T>) => T | string;
}
export interface DoublyLinkedList<T> {
  length: number;
  head: Node<T> | null;
  tail: Node<T> | null;
  push(this: DoublyLinkedList<T>, element: T): DoublyLinkedList<T>;
  pop(this: DoublyLinkedList<T>): T | undefined;
  unshift(this: DoublyLinkedList<T>, element: T): DoublyLinkedList<T>;
  shift(this: DoublyLinkedList<T>): T | undefined;
  get(this: DoublyLinkedList<T>, index: number): T | undefined;
  remove(this: DoublyLinkedList<T>, index?: number): DoublyLinkedList<T>;
  insert(
    this: DoublyLinkedList<T>,
    element: T,
    index?: number,
  ): DoublyLinkedList<T>;
  iterator(this: DoublyLinkedList<T>): Generator<T, void, T>;
  reverse(this: DoublyLinkedList<T>): DoublyLinkedList<T>;
  isEmpty(this: DoublyLinkedList<T>): boolean;
  toArray(this: DoublyLinkedList<T>): T[];
  toString(
    this: DoublyLinkedList<T>,
    callback?: ToStringCallback<T>,
    separator?: string,
  ): string;
}

const linkedList = <T>(): DoublyLinkedList<T> => {
  const node = (
    value: T,
    next: Node<T> | null = null,
    prev: Node<T> | null = null,
  ): Node<T> => {
    return {
      value,
      next,
      prev,
      toString: function toString(callback?) {
        return typeof callback === 'function'
          ? callback(this)
          : String(this.value);
      },
    };
  };

  const list: DoublyLinkedList<T> = {
    length: 0,
    head: null,
    tail: null,

    push: function push(element) {
      const newNode = node(element);
      if (!this.head || !this.tail) {
        this.head = newNode;
        this.tail = newNode;
        this.length++;
        return this;
      }
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
      return this;
    },

    pop: function pop() {
      if (this.isEmpty()) {
        return undefined;
      }
      const tail = this.tail as Node<T>;
      this.remove(this.length - 1);
      return tail.value;
    },

    unshift: function unshift(element) {
      const newNode = node(element, this.head);
      if (this.head) {
        this.head.prev = newNode;
      }
      this.head = newNode;

      if (!list.tail) {
        this.tail = newNode;
      }
      this.length++;
      return this;
    },

    shift: function shift() {
      if (this.isEmpty()) {
        return undefined;
      }
      const head = this.head as Node<T>;
      this.head = head.next;
      if (this.head === null) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }
      this.length--;
      return head.value;
    },

    get: function get(index) {
      if (index < 0 || index >= this.length || this.isEmpty()) {
        return undefined;
      }

      if (index === 0) {
        return (this.head as Node<T>).value;
      }
      if (index === this.length - 1) {
        return (this.tail as Node<T>).value;
      }

      let current = this.head as Node<T>;
      let i = 0;
      while (i < index && current.next) {
        current = current.next;
        i++;
      }
      return current.value;
    },

    remove: function remove(index = 0) {
      if (index < 0 || index >= this.length || this.isEmpty()) {
        return this;
      }

      if (index === 0) {
        this.shift();
        return this;
      }

      let current = this.head as Node<T>;
      let i = 0;
      while (i < index && current.next) {
        current = current.next;
        i++;
      }

      (current.prev as Node<T>).next = current.next;
      if (this.tail === current) {
        this.tail = current.prev;
      } else {
        (current.next as Node<T>).prev = current.prev;
      }
      this.length--;
      return this;
    },

    insert: function insert(element, index = 0) {
      if (index < 0 || index > this.length) {
        return this;
      }
      const newNode = node(element);
      if (index === 0 || !this.head) {
        return this.unshift(element);
      }

      if (index === this.length) {
        return this.push(element);
      }

      let current = this.head as Node<T>;
      let i = 0;
      while (i < index && current.next) {
        current = current.next;
        i++;
      }

      newNode.next = current;
      newNode.prev = current.prev;
      (current.prev as Node<T>).next = newNode;
      current.prev = newNode;
      this.length++;
      return this;
    },

    iterator: function* iterator() {
      let current = this.head;
      while (current !== null) {
        yield current.value;
        current = current.next;
      }
    },

    reverse: function reverse() {
      let current = this.head;
      let prev = null;
      let next = null;

      while (current) {
        // store next node.
        next = current.next;
        prev = current.prev;
        // change current node next so it links to the previous node.
        current.next = prev;
        current.prev = next;
        // move prev and current nodes one step forward.
        prev = current;
        current = next;
      }
      // reset head and tail.
      this.tail = this.head;
      this.head = prev;
      return this;
    },

    isEmpty: function isEmpty() {
      return this.length === 0;
    },

    toArray: function toArray() {
      const nodes = [];
      let current = this.head;
      while (current) {
        nodes.push(current.value);
        current = current.next;
      }
      return nodes;
    },

    toString: function toString(callback?, separator = ' -> ') {
      let str = '';
      let current = this.head;
      while (current) {
        str += current.toString(callback);
        current = current.next;
        if (current) {
          str += separator;
        }
      }
      return str;
    },
  };

  return list;
};

export default linkedList;
