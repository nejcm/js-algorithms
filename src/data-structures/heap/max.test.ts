import createHeap from './max';

describe('MaxHeap', () => {
  it('should create a heap', () => {
    const heap = createHeap();
    expect(heap.items).toEqual([]);
    expect(heap.peek()).toBeUndefined();
    expect(heap.isEmpty()).toBe(true);
  });

  it('should add items to the heap', () => {
    const heap = createHeap();

    expect(heap.shift()).toBeUndefined();

    heap.add(2);
    expect(heap.isEmpty()).toBe(false);
    expect(heap.peek()).toEqual(2);
    expect(heap.items).toEqual([2]);
    expect(heap.toString()).toEqual('2');

    heap.add(6);
    expect(heap.peek()).toEqual(6);
    expect(heap.items).toEqual([6, 2]);
    expect(heap.toString()).toEqual('6, 2');

    heap.add(10);
    expect(heap.peek()).toEqual(10);
    expect(heap.items).toEqual([10, 2, 6]);

    heap.add(1);
    expect(heap.peek()).toEqual(10);
    expect(heap.items).toEqual([10, 2, 6, 1]);

    expect(heap.shift()).toEqual(10);
    expect(heap.toString()).toEqual('6, 2, 1');

    expect(heap.shift()).toEqual(6);
    expect(heap.items).toEqual([2, 1]);

    expect(heap.shift()).toEqual(2);
    expect(heap.items).toEqual([1]);

    expect(heap.shift()).toEqual(1);
    expect(heap.items).toEqual([]);
  });

  it('should remove items from the heap', () => {
    const heap = createHeap();

    heap.add(4);
    heap.add(15);
    heap.add(15);
    heap.add(14);
    heap.add(8);
    heap.add(10);
    heap.add(10);
    heap.add(0);
    heap.add(10);
    heap.add(5);
    heap.add(9);
    heap.add(14);

    expect(heap.items).toEqual([15, 14, 15, 10, 9, 14, 10, 0, 4, 5, 8, 10]);
    expect(heap.remove(9).items).toEqual([
      15,
      14,
      15,
      10,
      10,
      14,
      10,
      0,
      4,
      9,
      8,
    ]);
    expect(heap.remove(6).items).toEqual([15, 14, 15, 10, 10, 14, 8, 0, 4, 9]);
    expect(heap.remove(2).items).toEqual([15, 14, 14, 10, 10, 9, 8, 0, 4]);
    expect(heap.remove(8).items).toEqual([15, 14, 14, 10, 10, 9, 8, 0]);
    expect(heap.remove(0).items).toEqual([14, 14, 9, 10, 10, 0, 8]);
    expect(heap.remove(2).items).toEqual([14, 14, 8, 10, 10, 0]);
    expect(heap.remove(1).items).toEqual([14, 10, 8, 10, 0]);
    expect(heap.remove(3).items).toEqual([14, 10, 8, 0]);
    expect(heap.remove(4).items).toEqual([14, 10, 8, 0]);
    expect(heap.remove(1).items).toEqual([14, 0, 8]);
    expect(heap.remove().items).toEqual([8, 0]);
  });

  it('should find items in the heap', () => {
    const heap = createHeap();

    heap.add(4);
    heap.add(15);
    heap.add(15);
    heap.add(8);
    heap.add(10);
    heap.add(10);
    heap.add(10);
    heap.add(0);

    expect(heap.find(1)).toEqual([]);
    expect(heap.find(10)).toEqual([1, 5, 6]);
    expect(heap.find(8)).toEqual([4]);
    expect(heap.find(15)).toEqual([0, 2]);

    expect(
      heap.find(
        10,
        (heapItem, searched) => (heapItem as number) < (searched as number),
      ),
    ).toEqual([3, 4, 7]);
  });

  it('should update an item in the heap', () => {
    const heap = createHeap();

    heap.add(4);
    heap.add(15);
    heap.add(15);
    heap.add(8);
    heap.add(10);

    expect(heap.items).toEqual([15, 10, 15, 4, 8]);
    expect(heap.update(-1, 2).items).toEqual([15, 10, 15, 4, 8]);
    expect(heap.update(0, 14).items).toEqual([15, 10, 14, 4, 8]);
    expect(heap.update(1, 0).items).toEqual([15, 8, 14, 4, 0]);
    expect(heap.update(4, 13).items).toEqual([15, 13, 14, 4, 8]);
  });

  it('should return true if heap contains item', () => {
    const heap = createHeap();

    expect(heap.contains(0)).toBeFalsy();

    heap.add(4);
    heap.add(15);
    heap.add(15);
    heap.add(8);
    heap.add(10);

    expect(heap.contains(4)).toBeTruthy();
    expect(heap.contains(15)).toBeTruthy();
    expect(heap.contains(10)).toBeTruthy();
    expect(heap.contains(9)).toBeFalsy();
  });

  it('should convert heap to string', () => {
    const heap = createHeap();

    heap.add(4);
    heap.add(15);
    heap.add(15);
    heap.add(8);
    heap.add(10);

    expect(heap.toString((item) => `${(item as number) * 10}`, '; ')).toEqual(
      '150; 100; 150; 40; 80',
    );
  });
});
