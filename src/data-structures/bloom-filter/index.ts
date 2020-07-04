export interface Options {
  size?: number;
}
export interface Item<T> {
  key: string;
  value: T;
}
export interface BloomFilter<T> extends Options {
  storage: boolean[];
  insert(this: BloomFilter<T>, value: T): void;
  contains(this: BloomFilter<T>, value: T): boolean;
}

const bloomFilter = <T>(options?: Options): BloomFilter<T> => {
  const size = options?.size || 1000;

  const hash1 = (value: string): number => {
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
      hash = (hash << 5) + hash + value.charCodeAt(i);
      // convert to 32bit int
      hash &= hash;
      hash = Math.abs(hash);
    }
    return hash % size;
  };

  const hash2 = (value: string): number => {
    let hash = 5381;
    for (let i = 0; i < value.length; i++) {
      // hash * 33 + c
      hash = (hash << 5) + hash + value.charCodeAt(i);
    }
    return Math.abs(hash % size);
  };

  const hash3 = (value: string): number => {
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
      hash = (hash << 5) - hash;
      hash += value.charCodeAt(i);
      // convert to 32bit int
      hash &= hash;
    }
    return Math.abs(hash % size);
  };

  const hash4 = (value: string): number => {
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
      hash += (value.charCodeAt(i) + i) * i + 1;
    }
    return Math.floor(hash % size);
  };

  const hash = (value: string): number[] => {
    return [hash1(value), hash2(value), hash3(value), hash4(value)];
  };

  const filter: BloomFilter<T> = {
    storage: Array(size).fill(false),

    // insert item
    insert: function insert(value) {
      const hashes = hash(String(value));
      // set indexes to true
      hashes.forEach((i) => (this.storage[i] = true));
    },

    // contains item
    contains: function contains(value) {
      const hashes = hash(String(value));
      // chech if all indexes are true
      // then it may contain value
      return !hashes.some((i) => !this.storage[i]);
    },
  };

  return filter;
};

export default bloomFilter;
