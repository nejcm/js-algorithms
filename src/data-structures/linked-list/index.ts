/* eslint-disable @typescript-eslint/no-empty-interface */
export interface Options {}
export type ToStringCallback = (current: Node | null) => unknown;
export interface NodeProps {
  value: unknown;
  next?: Node | null;
}
export interface Node extends NodeProps {
  next: Node | null;
  toString: (callback?: ToStringCallback) => unknown | string;
}
export interface LinkedList extends Options {
  length: number;
  head: Node | null;
  tail: Node | null;
  push(this: LinkedList, element: unknown): LinkedList;
  pop(this: LinkedList): unknown;
  unshift(this: LinkedList, element: unknown): LinkedList;
  shift(this: LinkedList): unknown;
  get(this: LinkedList, index: number): unknown;
  remove(this: LinkedList, index?: number): LinkedList;
  insert(this: LinkedList, element: unknown, index?: number): LinkedList;
  reverse(this: LinkedList): LinkedList;
  isEmpty(this: LinkedList): boolean;
  toArray(this: LinkedList): unknown[];
  toString(
    this: LinkedList,
    callback?: ToStringCallback,
    separator?: string,
  ): string;
}

const linkedList = (options?: Options): LinkedList => {
  const node = (value: unknown, next: Node | null = null): Node => {
    return {
      value,
      next,
      toString: function toString(callback?) {
        return typeof callback === 'function'
          ? callback(this)
          : String(this.value);
      },
    };
  };

  const list: LinkedList = {
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
      let previous: Node = current as Node;
      let i = 0;
      while (i < index && current.next) {
        previous = current;
        current = current.next;
        i++;
      }
      previous.next = current.next;
      if (previous.next === null) {
        this.tail = previous;
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

      let current = this.head;
      let prev = current;
      let i = 0;
      while (i < index && current.next) {
        prev = current;
        current = current.next;
        i++;
      }
      newNode.next = current;
      prev.next = newNode;
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
        // change current node next so it links to the previous node.
        current.next = prev;
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
