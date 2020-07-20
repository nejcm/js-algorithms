import {Node} from '../binaryTree';
import createTree from './index';

describe('BinarySearchTree', () => {
  it('should create empty tree', () => {
    const tree = createTree<number>();
    expect(tree).toBeDefined();
    expect(tree.root).toBeNull();
  });

  it('should insert nodes', () => {
    const tree = createTree();

    tree.insert(1);
    tree.insert(2);
    tree.insert(5);
    tree.insert(2);

    expect(tree.toString()).toEqual('1, 2, 5');
    expect(tree.toArray()).toEqual([1, 2, 5]);
    expect(tree.root?.key).toEqual(1);
  });

  it('should check if node exists', () => {
    const tree = createTree();

    tree.insert(1);
    tree.insert(2);
    tree.insert(5);

    expect(tree.has(1)).toBeTruthy();
    expect(tree.has(2)).toBeTruthy();
    expect(tree.has(5)).toBeTruthy();
    expect(tree.has(3)).toBeFalsy();
  });

  it('should remove nodes', () => {
    const tree = createTree();

    expect(tree.remove(0)).toEqual(false);
    expect(tree.root).toEqual(null);

    tree.insert(3);
    tree.insert(1);
    tree.insert(5);
    tree.insert(13);
    tree.insert(-1);
    tree.insert(8);
    tree.insert(7);
    tree.insert(2);
    tree.insert(4);
    tree.insert(-3);
    tree.insert(-6);
    tree.insert(10);

    tree.remove(5);
    expect(tree.toArray()).toEqual([-6, -3, -1, 1, 2, 3, 4, 7, 8, 10, 13]);

    tree.remove(6);
    expect(tree.toArray()).toEqual([-6, -3, -1, 1, 2, 3, 4, 7, 8, 10, 13]);
    expect(tree.root?.key).toEqual(3);

    tree.remove(-1);
    expect(tree.toArray()).toEqual([-6, -3, 1, 2, 3, 4, 7, 8, 10, 13]);

    tree.remove(7);
    expect(tree.toArray()).toEqual([-6, -3, 1, 2, 3, 4, 8, 10, 13]);

    tree.remove(1);
    tree.remove(3);
    tree.remove(-3);
    tree.remove(13);
    tree.remove(8);
    tree.remove(4);
    tree.remove(2);
    tree.remove(2);
    tree.remove(-6);
    tree.remove(10);
    expect(tree.toArray()).toEqual([]);
    expect(tree.root).toBeNull();
  });

  it('should traverse tree nodes', () => {
    const tree = createTree<string>();

    let generator = tree.traverse();
    expect(generator.next()).toMatchObject({done: true, value: undefined});

    tree.insert(5, 'N1');
    tree.insert(-10, 'N2');
    tree.insert(1, 'N3');
    tree.insert(-2, 'N4');
    tree.insert(8, 'N5');
    tree.insert(-12, 'N6');
    tree.insert(3, 'N7');

    generator = tree.traverse();

    const node = generator.next().value as Node<string>;
    expect(node.key).toEqual(-12);
    expect(node.value).toEqual('N6');
    expect((generator.next().value as Node<string>).key).toEqual(-10);
    expect((generator.next().value as Node<string>).key).toEqual(-2);
    expect((generator.next().value as Node<string>).key).toEqual(1);
    expect((generator.next().value as Node<string>).key).toEqual(3);
    expect((generator.next().value as Node<string>).key).toEqual(5);
    expect((generator.next().value as Node<string>).key).toEqual(8);
    expect(generator.next()).toMatchObject({done: true, value: undefined});
  });

  it('should traverse tree nodes in pre order', () => {
    const tree = createTree<string>();

    let generator = tree.traversePreOrder();
    expect(generator.next()).toMatchObject({done: true, value: undefined});

    tree.insert(5, 'N1');
    tree.insert(-10, 'N2');
    tree.insert(1, 'N3');
    tree.insert(-2, 'N4');
    tree.insert(8, 'N5');
    tree.insert(-12, 'N6');
    tree.insert(3, 'N7');

    generator = tree.traversePreOrder();

    expect((generator.next().value as Node<string>).key).toEqual(5);
    expect((generator.next().value as Node<string>).key).toEqual(-10);
    expect((generator.next().value as Node<string>).key).toEqual(-12);
    expect((generator.next().value as Node<string>).key).toEqual(1);
    expect((generator.next().value as Node<string>).key).toEqual(-2);
    expect((generator.next().value as Node<string>).key).toEqual(3);
    expect((generator.next().value as Node<string>).key).toEqual(8);
    expect(generator.next()).toMatchObject({done: true, value: undefined});
  });

  it('should traverse tree nodes in post order', () => {
    const tree = createTree<string>();

    let generator = tree.traversePostOrder();
    expect(generator.next()).toMatchObject({done: true, value: undefined});

    tree.insert(5, 'N1');
    tree.insert(-10, 'N2');
    tree.insert(1, 'N3');
    tree.insert(-2, 'N4');
    tree.insert(8, 'N5');
    tree.insert(-12, 'N6');
    tree.insert(3, 'N7');

    generator = tree.traversePostOrder();

    expect((generator.next().value as Node<string>).key).toEqual(-12);
    expect((generator.next().value as Node<string>).key).toEqual(-2);
    expect((generator.next().value as Node<string>).key).toEqual(3);
    expect((generator.next().value as Node<string>).key).toEqual(1);
    expect((generator.next().value as Node<string>).key).toEqual(-10);
    expect((generator.next().value as Node<string>).key).toEqual(8);
    expect((generator.next().value as Node<string>).key).toEqual(5);
    expect(generator.next()).toMatchObject({done: true, value: undefined});
  });

  it('should return array', () => {
    const tree = createTree<string>();

    tree.insert(5, 'N1');
    tree.insert(-10, 'N2');
    tree.insert(1, 'N3');
    tree.insert(-2, 'N4');

    expect(tree.toArray()).toEqual([-10, -2, 1, 5]);
    expect(tree.toArray<string>((node) => node.value || '')).toEqual([
      'N2',
      'N4',
      'N3',
      'N1',
    ]);
  });

  it('should get node', () => {
    const tree = createTree();

    expect(tree.findMin()).toBeUndefined();
    tree.insert('a');
    tree.insert('d');
    tree.insert('b');
    tree.insert('x');

    expect(tree.get('x')).toMatchObject({
      key: 'x',
    });
    expect(tree.get('b')).toMatchObject({
      key: 'b',
    });
    expect(tree.get('z')).toBeUndefined();
  });

  it('should find minimum', () => {
    const tree = createTree();

    expect(tree.findMin()).toBeUndefined();
    tree.insert(5);
    tree.insert(-10);
    tree.insert(1);
    tree.insert(-2);

    expect(tree.findMin()).toEqual(-10);
    tree.insert(-11);
    expect(tree.findMin()).toEqual(-11);
  });
});
