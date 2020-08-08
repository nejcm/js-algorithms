export type Key = string | number;
export interface ItemParam<T> {
  key: Key;
  value?: T;
}
export interface Item<T> extends ItemParam<T> {
  parent: Item<T> | null;
  rank: number;
  [key: string]: unknown;
}
export interface DisjointSet<T> {
  items: Map<Key, Item<T>>;
  add(this: DisjointSet<T>, ...values: (ItemParam<T> | Key)[]): boolean;
  find(this: DisjointSet<T>, key: Key): Key | undefined;
  union(this: DisjointSet<T>, key1: Key, key2: Key): DisjointSet<T>;
  isSameSet(this: DisjointSet<T>, key1: Key, key2: Key, ...rest: Key[]): boolean;
}

const disjointSet = <T>(): DisjointSet<T> => {
  const createItem = (key: Key, value?: T): Item<T> => {
    return {
      key,
      value,
      parent: null,
      rank: 1,
    };
  };

  const disjointSetObj: DisjointSet<T> = {
    items: new Map<Key, Item<T>>(),

    // add items
    add: function add(...items) {
      // map values to Item and add them to items
      items.forEach((item) => {
        const obj = typeof item === 'object' ? item : {key: item};
        if (!this.items.has(obj.key)) {
          this.items.set(obj.key, createItem(obj.key, obj.value));
        }
      });
      return true;
    },

    // find parent key
    find: function find(key) {
      // find item
      if (!this.items.has(key)) return undefined;
      const item = this.items.get(key) as Item<T>;
      let current = item;
      let i = 0;
      while (current.parent) {
        current = current.parent;
        i++;
      }
      // collapsing find
      // update parent
      if (i > 1) this.items.set(key, {...item, parent: current});
      // return key
      return current.key;
    },

    // make union out of keys
    union: function union(key1, key2) {
      const rootKey1 = this.find(key1);
      const rootKey2 = this.find(key2);

      // items do not exist
      if (rootKey1 === undefined || rootKey2 === undefined) {
        throw new Error('One or both values do not exist.');
      }

      // items already in the same set
      if (rootKey1 === rootKey2) {
        return this;
      }

      const root1 = this.items.get(rootKey1) as Item<T>;
      const root2 = this.items.get(rootKey2) as Item<T>;

      // weighted union
      // if root2's tree is bigger then make root2 a new root
      if (root1.rank < root2.rank) {
        root1.parent = root2;
        root2.rank += root1.rank;
        root1.rank = 1;
        return this;
      }

      // if root1's tree is bigger then make root1 a new root
      root2.parent = root1;
      root1.rank += root2.rank;
      root2.rank = 1;
      return this;
    },

    // check if all keys are in same set
    isSameSet: function isSameSet(...keys) {
      const key1 = this.find(keys[0]);
      // check if all keys have same root as first
      return key1 !== undefined && keys.splice(1).every((key) => key1 === this.find(key));
    },
  };

  return disjointSetObj;
};

export default disjointSet;
