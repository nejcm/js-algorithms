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
      menu: ['Overview'],
    },
    {
      name: 'Algorithms',
      menu: ['Overview'],
    },
  ],
  themeConfig: {
    footer: {
      navigation: true
    },
    menu: {
      headings: {
        rightSide: true,
        scrollspy: true,
        depth: 3
      }
    }
  },
};
