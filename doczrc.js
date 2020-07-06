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
    'Data structures': 'Overview',
    'Code challanges': 'Overview',
  },
  groups: {
    '': [],
    Algorithms: ['Algorithms', 'Sorting', 'Searching', 'Pattern', 'String'],
    'Data Structures': ['Data structures', 'All data structures'],
    'Code challanges': ['Code challanges'],
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
