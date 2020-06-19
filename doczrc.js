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
      name: 'Data Structures',
      menu: [],
    },
  ],
  menuDisplayName: {
    Algorithms: 'Overview',
    'All data structures': 'All',
    'Data Structures': 'Overview',
    Other: 'Overview',
  },
  groups: {
    '': [],
    Algorithms: ['Algorithms', 'Sorting', 'Searching', 'Pattern', 'String'],
    'Data Structures': ['Data Structures', 'All data structures'],
    Other: ['Other'],
  },
  themeConfig: {
    search: true,
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
