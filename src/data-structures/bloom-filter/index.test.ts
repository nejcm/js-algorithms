import createBloomFilter from './';

describe('BloomFilter', () => {
  it('should create bloom filter of certain size', () => {
    const bloomFilter = createBloomFilter();
    expect(bloomFilter).toBeDefined();
    expect(bloomFilter.storage).toBeDefined();
    expect(typeof bloomFilter.insert).toBe('function');
    expect(typeof bloomFilter.contains).toBe('function');

    const biggerHashTable = createBloomFilter({size: 50});
    expect(biggerHashTable.storage.length).toBe(50);
  });

  it('should insert item into bloom filter and check if it contains item', () => {
    const values = ['car', 'fruit', 'fruits', 'laptop', 10, 'hello', -10];
    const bloomFilter = createBloomFilter();

    values.forEach((val) => bloomFilter.insert(val));

    values.forEach((val) => {
      expect(bloomFilter.contains(val)).toBeTruthy();
    });
    expect(bloomFilter.contains('apple')).toBeFalsy();
    expect(bloomFilter.contains('cars')).toBeFalsy();
    expect(bloomFilter.contains(9)).toBeFalsy();
    expect(bloomFilter.contains(100)).toBeFalsy();
  });
});
