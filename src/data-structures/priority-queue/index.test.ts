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

    expect(queue.items.isEmpty()).toBeTruthy();

    initialValues.forEach((item) => queue.enqueue(item.value, item.priority));

    expect(queue.items.isEmpty()).toBeFalsy();
    expect(queue.peek()).toEqual('a');
    queue.enqueue('e');
    expect(queue.peek()).toEqual('e');
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

    expect(queue.dequeue()).toEqual('a');
    expect(queue.dequeue()).toEqual('c');
    expect(queue.dequeue()).toEqual('b');
    expect(queue.dequeue()).toEqual('d');
    expect(queue.dequeue()).toBeUndefined();
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

    expect(queue.peek()).toEqual('task 1');
    queue.changePriority('task 2', 0);
    expect(queue.peek()).toEqual('task 2');
    queue.changePriority('task 4', 2);
    expect(queue.peek()).toEqual('task 2');
  });

  it('should peek the first item in the priority queue', () => {
    const queue = createQueue();
    const initialValues = [
      {value: 'a', priority: 1},
      {value: 'b', priority: 0},
    ];

    expect(queue.peek()).toBeUndefined();
    initialValues.forEach((item) => queue.enqueue(item.value, item.priority));

    expect(queue.peek()).toEqual('b');
    queue.dequeue();
    expect(queue.peek()).toEqual('a');
  });

  it('should check if the priority queue is empty', () => {
    const queue = createQueue();

    expect(queue.isEmpty()).toBe(true);
    expect(queue.enqueue('task 1').isEmpty()).toBe(false);
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
