export type Key = string | number;
export interface ItemParam<T> {
  key: Key;
  value?: T;
}
export interface Item<T> extends ItemParam<T> {
  parent: Item<T> | null;
  rank: number;
}
export interface DisjointSet<T> {
  items: {[key: string]: Item<T>};
  add(this: DisjointSet<T>, ...values: (ItemParam<T> | Key)[]): boolean;
  find(this: DisjointSet<T>, key: Key): Key | undefined;
  union(this: DisjointSet<T>, key1: Key, key2: Key): DisjointSet<T>;
  isSameSet(
    this: DisjointSet<T>,
    key1: Key,
    key2: Key,
    ...rest: Key[]
  ): boolean;
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
    items: {},

    // add items
    add: function add(...items) {
      // map values to Item object
      this.items = {
        ...this.items,
        ...items.reduce((map, item) => {
          const obj = typeof item === 'object' ? item : {key: item};
          map[String(obj.key)] = createItem(obj.key, obj.value);
          return map;
        }, {} as {[key: string]: Item<T>}),
      };
      return true;
    },

    // find parent key
    find: function find(key) {
      if (!this.items.hasOwnProperty(key)) return undefined;
      let current = this.items[key];
      let i = 0;
      while (current.parent) {
        current = current.parent;
        i++;
      }
      if (i > 1) this.items[key].parent = current;
      // collapsing find
      return current.key;
    },

    // make union out of keys
    union: function union(key1, key2) {
      const rootKey1 = this.find(key1);
      const rootKey2 = this.find(key2);

      // items do not exist
      if (!rootKey1 || !rootKey2) {
        throw new Error('One or both values do not exist.');
      }

      // items already in the same set
      if (rootKey1 === rootKey2) {
        return this;
      }

      const root1 = this.items[rootKey1];
      const root2 = this.items[rootKey2];

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
      return (
        key1 !== undefined &&
        keys.splice(1).every((key) => key1 === this.find(key))
      );
    },
  };

  return disjointSetObj;
};

export default disjointSet;
