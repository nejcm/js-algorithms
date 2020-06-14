/* eslint-disable @typescript-eslint/no-empty-interface */
export interface Options {}
export type ToStringCallback = (current: Node | null) => unknown;
export interface NodeProps {
  value: unknown;
  next?: Node | null;
  prev?: Node | null;
}
export interface Node extends NodeProps {
  next: Node | null;
  prev: Node | null;
  toString: (callback?: ToStringCallback) => unknown | string;
}
export interface DoublyLinkedList extends Options {
  length: number;
  head: Node | null;
  tail: Node | null;
  push(this: DoublyLinkedList, element: unknown): DoublyLinkedList;
  pop(this: DoublyLinkedList): unknown;
  unshift(this: DoublyLinkedList, element: unknown): DoublyLinkedList;
  shift(this: DoublyLinkedList): unknown;
  get(this: DoublyLinkedList, index: number): unknown;
  remove(this: DoublyLinkedList, index?: number): DoublyLinkedList;
  insert(
    this: DoublyLinkedList,
    element: unknown,
    index?: number,
  ): DoublyLinkedList;
  reverse(this: DoublyLinkedList): DoublyLinkedList;
  reverseIterator(this: DoublyLinkedList): Generator<unknown, void, unknown>;
  isEmpty(this: DoublyLinkedList): boolean;
  toArray(this: DoublyLinkedList): unknown[];
  toString(
    this: DoublyLinkedList,
    callback?: ToStringCallback,
    separator?: string,
  ): string;
}

const linkedList = (options?: Options): DoublyLinkedList => {
  const node = (
    value: unknown,
    next: Node | null = null,
    prev: Node | null = null,
  ): Node => {
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

  const list: DoublyLinkedList = {
    length: 0,
    head: null,
    tail: null,
    ...options,

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
      const tail = this.tail as Node;
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
      const head = this.head as Node;
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
        return (this.head as Node).value;
      }
      if (index === this.length - 1) {
        return (this.tail as Node).value;
      }

      let current = this.head as Node;
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

      let current = this.head as Node;
      let i = 0;
      while (i < index && current.next) {
        current = current.next;
        i++;
      }

      (current.prev as Node).next = current.next;
      if (this.tail === current) {
        this.tail = current.prev;
      } else {
        (current.next as Node).prev = current.prev;
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

      let current = this.head as Node;
      let i = 0;
      while (i < index && current.next) {
        current = current.next;
        i++;
      }

      newNode.next = current;
      newNode.prev = current.prev;
      (current.prev as Node).next = newNode;
      current.prev = newNode;
      this.length++;
      return this;
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

    reverseIterator: function* reverseIterator() {
      let current = this.tail;
      while (current !== null) {
        yield current.value;
        current = current.prev;
      }
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
