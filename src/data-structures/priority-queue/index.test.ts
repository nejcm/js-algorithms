import createQueue from './';

describe('PriorityQueue', () => {
  it('should create a priority queue', () => {
    const queue = createQueue();
    expect(queue).toBeDefined();
    expect(queue.items.items).toEqual([]);
    expect(queue.toString()).toEqual('');
  });

  it('should enqueue an item', () => {
    const queue = createQueue();
    const initialValues = [
      {value: 'a', priority: 1},
      {value: 'b', priority: 3},
      {value: 'c', priority: 2},
      {value: 'd', priority: 6},
    ];

    expect(queue.isEmpty()).toBeTruthy();
    expect(queue.size()).toEqual(0);

    initialValues.forEach((item) => queue.enqueue(item.value, item.priority));

    expect(queue.size()).toEqual(4);
    expect(queue.isEmpty()).toBeFalsy();
    expect(queue.peek()?.value).toEqual('a');
    queue.enqueue('e');
    expect(queue.peek()?.value).toEqual('e');
  });

  it('should dequeue an item', () => {
    const queue = createQueue();
    const initialValues = [
      {value: 'a', priority: 1},
      {value: 'b', priority: 3},
      {value: 'c', priority: 2},
      {value: 'd', priority: 6},
    ];

    initialValues.forEach((item) => queue.enqueue(item.value, item.priority));

    expect(queue.dequeue()?.value).toEqual('a');
    expect(queue.dequeue()?.value).toEqual('c');
    expect(queue.dequeue()?.value).toEqual('b');
    expect(queue.dequeue()?.value).toEqual('d');
    expect(queue.dequeue()).toBeUndefined();
  });

  it('should remove item from queue', () => {
    const queue = createQueue();
    const initialValues = [
      {value: 'a', priority: 1},
      {value: 'b', priority: 3},
      {value: 'c', priority: 2},
      {value: 'd', priority: 6},
    ];

    initialValues.forEach((item) => queue.enqueue(item.value, item.priority));

    expect(queue.size()).toEqual(4);
    expect(queue.peek()?.value).toEqual('a');

    queue.remove('a');
    expect(queue.size()).toEqual(3);
    expect(queue.toArray().map((item) => item.value)).toEqual(['c', 'b', 'd']);

    queue.remove('b');
    expect(queue.size()).toEqual(2);
    expect(queue.toArray().map((item) => item.value)).toEqual(['c', 'd']);

    queue.remove('d');
    expect(queue.size()).toEqual(1);
    expect(queue.toArray().map((item) => item.value)).toEqual(['c']);

    queue.remove('c');
    expect(queue.size()).toEqual(0);
    expect(queue.toArray()).toEqual([]);
  });

  it('should clear a queue', () => {
    const queue = createQueue();
    const initialValues = [
      {value: 'a', priority: 0},
      {value: 'b', priority: 1},
    ];

    initialValues.forEach((item) => queue.enqueue(item.value, item.priority));

    expect(queue.size()).toEqual(2);

    queue.clear();
    expect(queue.size()).toEqual(0);

    initialValues.forEach((item) => queue.enqueue(item.value, item.priority));

    expect(queue.size()).toEqual(2);
    expect(queue.peek()?.value).toEqual('a');
  });

  it('should update the priority of an item', () => {
    const queue = createQueue();
    const initialValues = [
      {value: 'task 1', priority: 1},
      {value: 'task 2', priority: 3},
      {value: 'task 3', priority: 2},
      {value: 'task 4', priority: 6},
    ];

    initialValues.forEach((item) => queue.enqueue(item.value, item.priority));

    expect(queue.peek()?.value).toEqual('task 1');
    queue.changePriority('task 2', 0);
    expect(queue.peek()?.value).toEqual('task 2');
    queue.changePriority('task 4', 2);
    expect(queue.peek()?.value).toEqual('task 2');
  });

  it('should return true if item in queue', () => {
    const queue = createQueue();
    const initialValues = [
      {value: 'task 1', priority: 1},
      {value: 'task 2', priority: 3},
      {value: 'task 3', priority: 2},
      {value: 'task 4', priority: 6},
    ];

    expect(queue.contains('task 1')).toBeFalsy();

    initialValues.forEach((item) => queue.enqueue(item.value, item.priority));

    expect(queue.contains('task 1')).toBeTruthy();
    expect(queue.contains('task 3')).toBeTruthy();
    expect(queue.contains('task 4')).toBeTruthy();
    expect(queue.contains('task 0')).toBeFalsy();
  });

  it('should peek the first item in the priority queue', () => {
    const queue = createQueue();
    const initialValues = [
      {value: 'a', priority: 1},
      {value: 'b', priority: 0},
    ];

    expect(queue.peek()).toBeUndefined();
    initialValues.forEach((item) => queue.enqueue(item.value, item.priority));

    expect(queue.peek()?.value).toEqual('b');
    queue.dequeue();
    expect(queue.peek()?.value).toEqual('a');
  });

  it('should check if the priority queue is empty', () => {
    const queue = createQueue();

    expect(queue.isEmpty()).toBe(true);
    expect(queue.enqueue('task 1').isEmpty()).toBe(false);
  });

  it('should covert the priority queue to array', () => {
    const queue = createQueue();

    const initialValues = [
      {value: 'task 1', priority: 1},
      {value: 'task 2', priority: 3},
      {value: 'task 3', priority: 2},
      {value: 'task 4', priority: 6},
    ];

    initialValues.forEach((item) => queue.enqueue(item.value, item.priority));

    expect(queue.toArray()).toEqual(initialValues);
  });

  it('should covert the priority queue to string', () => {
    const queue = createQueue();

    const initialValues = [
      {value: 'task 1', priority: 1},
      {value: 'task 2', priority: 3},
      {value: 'task 3', priority: 2},
      {value: 'task 4', priority: 6},
    ];

    initialValues.forEach((item) => queue.enqueue(item.value, item.priority));

    expect(queue.toString()).toEqual('task 1, task 2, task 3, task 4');
    expect(queue.toString((item) => `#${item.value}`, ' -> ')).toEqual(
      '#task 1 -> #task 2 -> #task 3 -> #task 4',
    );
  });
});
