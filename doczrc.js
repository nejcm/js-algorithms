const pkgNmae = 'js-algorithms';

export default {
  lang: 'en',
  files: '**/*.mdx',
  ignore: ['./*.md'],
  title: `🔥 ${pkgNmae}`,
  base: `/${pkgNmae}/`,
  description: `Documentation on ${pkgNmae}.`,
  menu: [
    'Introduction',
    'Installation',
    {
      name: 'Data Structures',
      menu: [],
    },
  ],
  menuDisplayName: {
    Algorithms: 'Overview',
    'Data Structures': 'Overview',
    Other: 'Overview',
  },
  groups: {
    '': [],
    Algorithms: ['Algorithms', 'Sorting', 'Searching', 'Pattern', 'String'],
    'Data Structures': [
      'Data Structures',
      'Bloom filter',
      'Disjoint-set',
      'Doubly linked list',
      'Graph',
      'Hash table',
      'Heap',
      'Linked list',
      'Priority queue',
      'Queue',
      'Stack',
      'Tree',
      'Trie',
    ],
    Other: ['Other'],
  },
  themeConfig: {
    footer: {
      navigation: true,
    },
    menu: {
      headings: {
        rightSide: true,
        scrollspy: true,
        depth: 3,
      },
    },
  },
};
