import createTree from '../../../data-structures/tree/red-black-tree';
import isValidRedBlackTree from './';

const rbTree = {
  key: 25,
  isBlack: true,
  left: {
    key: 13,
    isBlack: false,
    left: {
      key: 6,
      isBlack: true,
      left: {
        key: 3,
        isBlack: true,
        left: {
          key: 0,
          isBlack: false,
          left: null,
          right: null,
        },
        right: {key: 5, isBlack: false, left: null, right: null},
      },
      right: {
        key: 9,
        isBlack: false,
        left: {key: 7, isBlack: true, left: null, right: null},
        right: {
          key: 11,
          isBlack: true,
          left: null,
          right: {key: 12, isBlack: false, left: null, right: null},
        },
      },
    },
    right: {
      key: 21,
      isBlack: true,
      left: {
        key: 16,
        isBlack: false,
        left: {key: 14, isBlack: true, left: null, right: null},
        right: {
          key: 19,
          isBlack: true,
          left: {key: 17, isBlack: false, left: null, right: null},
          right: {key: 20, isBlack: false, left: null, right: null},
        },
      },
      right: {
        key: 23,
        isBlack: false,
        left: {key: 22, isBlack: true, left: null, right: null},
        right: {key: 24, isBlack: true, left: null, right: null},
      },
    },
  },
  right: {
    key: 30,
    isBlack: true,
    left: {
      key: 27,
      isBlack: false,
      left: {key: 26, isBlack: true, left: null, right: null},
      right: {key: 29, isBlack: true, left: null, right: null},
    },
    right: {
      key: 48,
      isBlack: false,
      left: {key: 43, isBlack: true, left: null, right: null},
      right: {key: 50, isBlack: true, left: null, right: null},
    },
  },
};

describe('isValidRedBlack', () => {
  it('should return true for empty red black tree tree', () => {
    const tree = createTree();
    expect(isValidRedBlackTree(tree)).toBeTruthy();
  });

  it('should return true for black root', () => {
    const tree = createTree();
    tree.root = {
      key: 0,
      left: null,
      right: null,
      isBlack: true,
    };
    expect(isValidRedBlackTree(tree)).toBeTruthy();
  });

  it('should return false for red root', () => {
    const tree = createTree();
    tree.root = {
      key: 0,
      left: null,
      right: null,
      isBlack: false,
    };
    expect(isValidRedBlackTree(tree)).toBeFalsy();
  });

  it('should return true for correct red-black tree', () => {
    const tree = createTree();
    tree.root = rbTree;
    expect(isValidRedBlackTree(tree)).toBeTruthy();
  });

  it('should return false for consecutive red nodes in tree', () => {
    const tree = createTree();
    tree.root = rbTree;
    if (tree.root?.left?.left?.left) tree.root.left.left.left.isBlack = false;
    expect(isValidRedBlackTree(tree)).toBeFalsy();
  });

  it('should return false for wrong number of black nodes in tree', () => {
    const tree = createTree();
    tree.root = rbTree;
    if (tree.root?.left?.right?.left?.right?.right)
      tree.root.left.right.left.right.right.isBlack = true;
    expect(isValidRedBlackTree(tree)).toBeFalsy();
  });
});
