const pkgName = 'js-algorithms';

export default {
  lang: 'en',
  files: '**/*.mdx',
  ignore: ['readme.md', 'README.md'],
  title: `🔥 ${pkgName}`,
  base: `/${pkgName}/`,
  description: `Documentation on ${pkgName}.`,
  menu: [
    'Introduction',
    'Installation',
    {
      name: 'Data structures',
      menu: [],
    },
  ],
  menuDisplayName: {
    Algorithms: 'Overview',
    'All data structures': 'All',
    'Data structures': 'Overview',
    'Code challenges': 'Overview',
    'Tree BFS & DFS': 'BFS & DFS',
    'Graph BFS & DFS': 'BFS & DFS',
  },
  groups: {
    '': [],
    Algorithms: [
      'Algorithms',
      'Graph',
      'Math',
      'Pattern',
      'Searching',
      'Sorting',
      'String',
      'Tree',
    ],
    'Data structures': ['Data structures', 'All data structures'],
    'Code challenges': ['Code challenges'],
  },
  themeConfig: {
    search: true,
    header: {
      icons: 'minimal',
    },
    footer: {
      navigation: true,
    },
    menu: {
      search: false,
      headings: {
        rightSide: true,
        scrollspy: true,
        depth: 3,
      },
    },
  },
};
