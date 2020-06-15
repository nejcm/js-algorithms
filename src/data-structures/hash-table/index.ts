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
  buckets: LinkedList<Item<T>>[];
  hash(this: HashTable<T>, key: string): number;
  insert(this: HashTable<T>, key: string, value: T): void;
  delete(this: HashTable<T>, key: string): boolean;
  get(this: HashTable<T>, key: string): T | undefined;
  has(this: HashTable<T>, key: string): boolean;
}

const hashTable = <T>(options: Options = {size: 20}): HashTable<T> => {
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
    size: 20,
    buckets: Array(options.size)
      .fill(null)
      .map(() => linkedList()),

    hash: function hash(key) {
      const keyHash = polyHash.hash(key);
      return keyHash % this.buckets.length;
    },
    insert: function insert(key, value) {
      const keyHash = this.hash(key);
      const list = this.buckets[keyHash];
      const {item} = find(list, key);

      if (!item) {
        // Insert
        list.push({key, value});
      } else {
        // Update existing
        item.value = value;
      }
    },
    // prettier-ignore
    "delete": function del(key) {
      const keyHash = this.hash(key);
      const list = this.buckets[keyHash];
      const {index} = find(list, key);
      if (index >= 0) {
        list.remove(index);
        return true;
      }
      return false;
    },
    get: function get(key) {
      const keyHash = this.hash(key);
      const list = this.buckets[keyHash];
      const {item} = find(list, key);
      return item?.value;
    },
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
