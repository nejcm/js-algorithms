import createLinkedList from './';

describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = createLinkedList();
    expect(linkedList.toString()).toBe('');
    expect(linkedList.toArray()).toEqual([]);
  });

  it('should push a node to linked list', () => {
    const linkedList = createLinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.push(0);
    linkedList.push(1);
    expect(linkedList.toString()).toBe('0 -> 1');
    expect(linkedList.tail).not.toBeNull();
    expect(linkedList.tail?.value).toBe(1);
    expect(linkedList.tail?.next).toBeNull();
  });

  it('should pop a node from linked list', () => {
    const linkedList = createLinkedList();

    expect(linkedList.pop()).toBeUndefined();
    linkedList.push(0);
    linkedList.push(1);
    expect(linkedList.pop()).toEqual(1);
    expect(linkedList.pop()).toEqual(0);
    expect(linkedList.pop()).toBeUndefined();
  });

  it('should unshift a node to linked list', () => {
    const linkedList = createLinkedList();

    linkedList.unshift(2);
    expect(linkedList.head?.value).toEqual(2);
    expect(linkedList.tail?.value).toEqual(2);

    linkedList.push(1);
    expect(linkedList.tail?.value).toEqual(1);

    linkedList.unshift(0);
    expect(linkedList.head?.value).toEqual(0);
    expect(linkedList.toString()).toBe('0 -> 2 -> 1');
  });

  it('should shift a node from linked list', () => {
    const linkedList = createLinkedList();

    expect(linkedList.shift()).toBeUndefined();
    linkedList.push(0);
    linkedList.push(1);
    expect(linkedList.shift()).toEqual(0);
    expect(linkedList.shift()).toEqual(1);
    expect(linkedList.shift()).toBeUndefined();
  });

  it('should insert a node at index into linked list', () => {
    const linkedList = createLinkedList();

    linkedList.push('a');
    linkedList.push('b');
    expect(linkedList.toArray()).toEqual(['a', 'b']);
    expect(linkedList.insert('c', 1).toArray()).toEqual(['a', 'c', 'b']);
    expect(linkedList.tail?.value).toBe('b');
    expect(linkedList.insert('d', 5).toArray()).toEqual(['a', 'c', 'b']);
    expect(linkedList.insert('d').toArray()).toEqual(['d', 'a', 'c', 'b']);
    expect(linkedList.head?.value).toBe('d');
    expect(linkedList.insert('e', 4).toArray()).toEqual([
      'd',
      'a',
      'c',
      'b',
      'e',
    ]);
    expect(linkedList.insert('f', 3).toArray()).toEqual([
      'd',
      'a',
      'c',
      'f',
      'b',
      'e',
    ]);
    expect(linkedList.tail?.value).toBe('e');
  });

  it('should return a node at index from linked list', () => {
    const linkedList = createLinkedList();

    expect(linkedList.get(0)).toBeUndefined();
    linkedList.push('a');
    linkedList.push('b');
    linkedList.push('c');
    linkedList.push('d');
    linkedList.push('e');
    expect(linkedList.get(0)).toEqual('a');
    expect(linkedList.get(2)).toEqual('c');
    expect(linkedList.get(6)).toBeUndefined();
    expect(linkedList.get(-1)).toBeUndefined();
    expect(linkedList.get(3)).toEqual('d');
    expect(linkedList.get(4)).toEqual('e');
  });

  it('should remove a node at index from linked list', () => {
    const linkedList = createLinkedList();

    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    expect(linkedList.toArray()).toEqual([1, 2, 3, 4]);
    expect(linkedList.tail?.value).toBe(4);
    expect(linkedList.length).toEqual(4);
    expect(linkedList.remove(3).toArray()).toEqual([1, 2, 3]);
    expect(linkedList.tail?.value).toBe(3);
    expect(linkedList.length).toEqual(3);
    expect(linkedList.remove(1).toArray()).toEqual([1, 3]);
    expect(linkedList.tail?.value).toBe(3);
    expect(linkedList.length).toEqual(2);
    expect(linkedList.remove(2).toArray()).toEqual([1, 3]);
    expect(linkedList.length).toEqual(2);
    expect(linkedList.remove(-1).toArray()).toEqual([1, 3]);
    expect(linkedList.remove().toArray()).toEqual([3]);
    expect(linkedList.tail?.value).toBe(3);
    expect(linkedList.length).toEqual(1);
    expect(linkedList.remove(0).toArray()).toEqual([]);
    expect(linkedList.tail).toBeNull();
    expect(linkedList.length).toEqual(0);
    expect(linkedList.remove(0).toArray()).toEqual([]);
  });

  it('should reverse iterate linked list', () => {
    const linkedList = createLinkedList();

    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    const generator = linkedList.iterator();

    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(2);
    expect(generator.next().value).toEqual(3);
    expect(generator.next()).toMatchObject({done: true, value: undefined});
  });

  it('should reverse linked list', () => {
    const linkedList = createLinkedList();

    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    expect(linkedList.reverse().toArray()).toEqual([3, 2, 1]);
  });

  it('should check if linked list is empty', () => {
    type Obj = {val: number};
    const linkedList = createLinkedList<Obj>();
    linkedList.push({val: 0});
    linkedList.push({val: 5});
    linkedList.push({val: 10});
    expect(linkedList.toString((node) => node?.value.val.toString())).toEqual(
      '0 -> 5 -> 10',
    );
    expect(
      linkedList.toString((node) => node?.value.val.toString(), ','),
    ).toEqual('0,5,10');
  });

  it('should convert linked list to string', () => {
    const linkedList = createLinkedList();

    expect(linkedList.isEmpty()).toEqual(true);
    linkedList.push({0: '0'});
    expect(linkedList.isEmpty()).toEqual(false);
  });
});
