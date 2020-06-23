import createPolyHash from '../../algorithms/cryptography/polynomial-hash';
import linkedList, {LinkedList} from '../linked-list';
const polyHash = createPolyHash();

export interface Options {
  size?: number;
}
export interface Item<T> {
  key: string;
  value: T;
}
export interface HashTable<T> extends Options {
  size: number;
  length: number;
  buckets: LinkedList<Item<T>>[];
  hash(this: HashTable<T>, key: string): number;
  insert(this: HashTable<T>, key: string, value: T): void;
  delete(this: HashTable<T>, key: string): boolean;
  get(this: HashTable<T>, key: string): T | undefined;
  getAll(this: HashTable<T>): Item<T>[];
  has(this: HashTable<T>, key: string): boolean;
}

const hashTable = <T>(options: Options = {size: 20}): HashTable<T> => {
  // find the item and index
  const find = (
    list: LinkedList<Item<T>>,
    key: string,
  ): {item?: Item<T>; index: number} => {
    const iterator = list.iterator();
    let node = iterator.next();
    let index = 0;
    while (!node.done) {
      const item = node.value;
      if (item.key === key) {
        return {item, index};
      }
      index++;
      node = iterator.next();
    }
    return {index: -1};
  };

  const table: HashTable<T> = {
    size: 20, // default hash table size
    length: 0,
    buckets: Array(options.size)
      .fill(null)
      .map(() => linkedList()),

    // calculate the key hash value
    hash: function hash(key) {
      const keyHash = polyHash.hash(key);
      return keyHash % this.buckets.length;
    },

    // insert new item into the table
    insert: function insert(key, value) {
      const keyHash = this.hash(key);
      const list = this.buckets[keyHash];
      const {item} = find(list, key);

      if (!item) {
        // insert
        list.push({key, value});
        this.length++;
      } else {
        // update existing
        item.value = value;
      }
    },

    // delete item from hash table
    // prettier-ignore
    "delete": function del(key) {
      const keyHash = this.hash(key);
      const list = this.buckets[keyHash];
      const {index} = find(list, key);
      if (index >= 0) {
        list.remove(index);
        this.length--;
        return true;
      }
      return false;
    },

    // get item from the hash table
    get: function get(key) {
      const keyHash = this.hash(key);
      const list = this.buckets[keyHash];
      const {item} = find(list, key);
      return item?.value;
    },

    // get all items
    getAll: function getAll() {
      let result: Item<T>[] = [];
      this.buckets.forEach((bucket) => {
        result = [...result, ...bucket.toArray()];
      });
      return result;
    },

    // check if the table contains a key/item
    has: function has(key) {
      const keyHash = this.hash(key);
      const list = this.buckets[keyHash];
      const {index} = find(list, key);
      return index >= 0;
    },
  };

  return table;
};

export default hashTable;
