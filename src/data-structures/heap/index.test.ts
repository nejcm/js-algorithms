import createHeap from './';

describe('Heap', () => {
  it('should create a heap', () => {
    const heap = createHeap();
    expect(heap.items).toEqual([]);
  });
});
