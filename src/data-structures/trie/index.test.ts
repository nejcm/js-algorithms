import createTrie from './';

describe('Trie', () => {
  it('should create empty trie', () => {
    const trie = createTrie();
    expect(trie).toBeDefined();
    expect(trie.root.toString()).toBe('*');
  });

  it('should add words to trie', () => {
    const trie = createTrie();

    trie.insert('cat');

    expect(trie.root.toString()).toBe('*:c');
    expect(trie.root.children.get('c')?.toString()).toBe('c:a');

    trie.insert('car');
    expect(trie.root.toString()).toBe('*:c');
    expect(trie.root.children.get('c')?.toString()).toBe('c:a');
    expect(trie.root.children.get('c')?.children.get('a')?.toString()).toBe(
      'a:r,t',
    );
    expect(
      trie.root.children
        .get('c')
        ?.children.get('a')
        ?.children.get('t')
        ?.toString(),
    ).toBe('t*');
  });

  it('should check if the word exists and deletes words from trie', () => {
    const trie = createTrie();

    trie.insert('book');
    trie.insert('booking');
    trie.insert('boss');
    trie.insert('boor');
    trie.insert('books');
    expect(trie.has('book')).toBe(true);
    expect(trie.has('booking')).toBe(true);
    expect(trie.has('boor')).toBe(true);
    expect(trie.has('boss')).toBe(true);
    expect(trie.has('books')).toBe(true);
    expect(trie.has('bookings')).toBe(false);

    trie.remove('bookings');
    expect(trie.has('book')).toBe(true);
    expect(trie.has('booking')).toBe(true);
    expect(trie.has('boor')).toBe(true);
    expect(trie.has('boss')).toBe(true);
    expect(trie.has('books')).toBe(true);

    trie.remove('booking');
    expect(trie.has('book')).toBe(true);
    expect(trie.has('booking')).toBe(false);
    expect(trie.has('boor')).toBe(true);
    expect(trie.has('boss')).toBe(true);
    expect(trie.has('books')).toBe(true);

    trie.remove('boss');
    expect(trie.has('book')).toBe(true);
    expect(trie.has('boss')).toBe(false);
    expect(trie.has('boor')).toBe(true);
    expect(trie.has('books')).toBe(true);

    trie.remove('books');
    expect(trie.has('book')).toBe(true);
    expect(trie.has('boor')).toBe(true);
    expect(trie.has('books')).toBe(false);

    trie.remove('book');
    expect(trie.has('book')).toBe(false);
    expect(trie.has('boor')).toBe(true);
  });

  it('should print words', () => {
    const trie = createTrie();

    trie.insert('ra');
    trie.insert('r');
    trie.remove('ra');
    expect(trie.has('ra')).toBe(false);
    expect(trie.root.toString()).toBe('*:r');
    expect(trie.root.children.get('r')?.toString()).toBe('r*');
    expect(trie.root.children.get('r')?.children.has('a')).toBe(false);
  });
});
