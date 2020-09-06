import createHashTable, {HashTable} from '../hash-table';

export type ToStringCallback = (current: Node) => string;
export interface Node {
  value: string;
  isComplete: boolean;
  children: HashTable<Node>;
  toString: (this: Node) => string;
}
export interface Trie {
  root: Node;
  insert(this: Trie, word: string, isComplete?: boolean): Trie;
  remove(this: Trie, word: string): Trie;
  search(this: Trie, word: string): Node | null;
  has(this: Trie, word: string): boolean;
}

const trie = (): Trie => {
  const createNode = (value: string, isComplete = false): Node => {
    return {
      value,
      isComplete,
      children: createHashTable<Node>(), // or object or array
      toString: function toString() {
        const items = this.children.getAll();
        const str = items.length
          ? `:${items.map((item) => item.value.value).join(',')}`
          : '';
        return `${this.value}${this.isComplete ? '*' : ''}${str}`;
      },
    };
  };

  const trieObj: Trie = {
    root: createNode('*'),

    // add a new word
    insert: function insert(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        const isComplete = i === word.length - 1;
        if (!node.children.has(word[i])) {
          const newNode = createNode(word[i], isComplete);
          node.children.insert(word[i], newNode);
        }
        node = node.children.get(word[i]) as Node;
        node.isComplete = node.isComplete || isComplete;
      }
      return this;
    },

    // remove word
    remove: function remove(word) {
      const delWord = (node: Node, i = 0) => {
        if (i >= word.length) {
          // index outside word length
          return;
        }

        const character = word[i];
        const nextNode = node.children.get(character);
        if (!nextNode) {
          // word does not exist
          return;
        }

        // go deeper
        delWord(nextNode, i + 1);

        // mark isCompleteWord
        if (i === word.length - 1) {
          nextNode.isComplete = false;
        }

        // has no children and isComplete === false
        if (nextNode && !nextNode.isComplete && !nextNode.children.length) {
          node.children.delete(character);
        }
      };

      // start with root
      delWord(this.root);
      return this;
    },

    // word exists in trie
    has: function has(word) {
      const last = this.search(word);
      return !!last && last.isComplete;
    },

    // search for word
    search: function search(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i += 1) {
        if (!node.children.has(word[i])) {
          return null;
        }
        node = node.children.get(word[i]) as Node;
      }
      return node;
    },
  };

  return trieObj;
};

export default trie;
