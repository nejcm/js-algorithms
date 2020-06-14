import createStack from './array';

describe('Stack', () => {
  it('should create a stack', () => {
    const stack = createStack();
    expect(stack).toBeDefined();
    expect(stack.items).toEqual([]);
    expect(stack.toString()).toEqual('');
  });

  it('should push an item on the stack', () => {
    const stack = createStack();
    const initialValues = [1, false, 'a', 2];

    initialValues.forEach((val) => stack.push(val));

    expect(stack.items).toEqual([2, 'a', false, 1]);
    stack.push('b');
    expect(stack.items).toEqual(['b', 2, 'a', false, 1]);
    expect(stack.toString()).toEqual('b -> 2 -> a -> false -> 1');
  });

  it('should pop an item from the stack', () => {
    const stack = createStack();
    const initialValues = [1, false];

    initialValues.forEach((val) => stack.push(val));

    expect(stack.pop()).toEqual(false);
    expect(stack.items).toEqual([1]);
    expect(stack.pop()).toEqual(1);
    expect(stack.pop()).toBeUndefined();
  });

  it('should peek the first item on the stack', () => {
    const stack = createStack();
    const initialValues = ['x', 'y', 'z'];

    expect(stack.peek()).toBeUndefined();
    initialValues.forEach((val) => stack.push(val));

    expect(stack.peek()).toEqual('z');
    expect(stack.items).toEqual(['z', 'y', 'x']);
  });

  it('should check if the stack is empty', () => {
    const stack = createStack();

    expect(stack.isEmpty()).toBe(true);
    expect(stack.push(0).isEmpty()).toBe(false);
  });
});
