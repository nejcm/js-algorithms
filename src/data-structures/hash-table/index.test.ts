import createHashTable from './';

describe('HashTable', () => {
  it('should create hash table of certain size', () => {
    const hashTable = createHashTable();
    expect(hashTable.buckets.length).toBe(20);

    const biggerHashTable = createHashTable({size: 32});
    expect(biggerHashTable.buckets.length).toBe(32);
  });

  it('should generate proper hash for specified keys', () => {
    const hashTable = createHashTable();

    expect(hashTable.hash('a')).toBe(17);
    expect(hashTable.hash('b')).toBe(18);
    expect(hashTable.hash('abc')).toBe(7);
  });

  it('should set, read and delete data with collisions', () => {
    const hashTable = createHashTable({size: 3});

    expect(hashTable.hash('a')).toBe(1);
    expect(hashTable.hash('b')).toBe(2);
    expect(hashTable.hash('c')).toBe(0);
    expect(hashTable.hash('d')).toBe(1);

    hashTable.insert('a', 'bye');
    hashTable.insert('a', 'bye-bye');
    hashTable.insert('b', 'hello');
    hashTable.insert('c', 'me');

    expect(hashTable.has('x')).toBe(false);
    expect(hashTable.has('b')).toBe(true);
    expect(hashTable.has('c')).toBe(true);

    expect(hashTable.get('a')).toBe('bye-bye');
    expect(hashTable.get('b')).toBe('hello');
    expect(hashTable.get('x')).not.toBeDefined();

    expect(hashTable.delete('a')).toEqual(true);
    expect(hashTable.get('a')).not.toBeDefined();

    expect(hashTable.delete('x')).toEqual(false);

    expect(hashTable.get('c')).toBe('me');
  });

  it('should be possible to add objects to hash table', () => {
    const hashTable = createHashTable();

    hashTable.insert('objKey', {k1: 'a'});
    const obj = hashTable.get('objKey') as {k1: unknown};

    expect(obj).toBeDefined();
    expect(obj.k1).toBe('a');
  });
});
