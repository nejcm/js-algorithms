import createQueue from './';

describe('Queue', () => {
  it('should create a queue', () => {
    const queue = createQueue();
    expect(queue).toBeDefined();
    expect(queue.items.toArray()).toEqual([]);
    expect(queue.toString()).toEqual('');
  });

  it('should enqueue an item', () => {
    const queue = createQueue();
    const initialValues = [1, false, 'a', 2];

    initialValues.forEach((val) => queue.enqueue(val));

    expect(queue.items.toArray()).toEqual(initialValues);
    queue.enqueue('b');
    expect(queue.items.toArray()).toEqual([...initialValues, 'b']);
  });

  it('should dequeue an item', () => {
    const queue = createQueue();
    const initialValues = [1, false, {key: 'test'}];

    initialValues.forEach((val) => queue.enqueue(val));

    expect(queue.dequeue()).toEqual(1);
    expect(queue.items.toArray()).toEqual([false, {key: 'test'}]);
    expect(queue.dequeue()).toEqual(false);
    expect(queue.dequeue()).toEqual({key: 'test'});
    expect(queue.dequeue()).toBeUndefined();
  });

  it('should peek the first item in the queue', () => {
    const queue = createQueue();
    const initialValues = ['x', 'y', 'z'];

    expect(queue.peek()).toBeUndefined();
    initialValues.forEach((val) => queue.enqueue(val));

    expect(queue.peek()).toEqual('x');
    queue.dequeue();
    expect(queue.peek()).toEqual('y');
  });

  it('should check if the queue is empty', () => {
    const queue = createQueue();

    expect(queue.isEmpty()).toBe(true);
    expect(queue.enqueue(0).isEmpty()).toBe(false);
  });
});
