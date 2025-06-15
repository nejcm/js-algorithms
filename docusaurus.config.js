const config = {
  title: '🔥 js-algorithms',
  tagline: 'JavaScript Algorithms and Data Structures',
  url: 'https://nejcm.github.io',
  baseUrl: '/js-algorithms/',
  organizationName: 'nejcm',
  projectName: 'js-algorithms',
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/nejcm/js-algorithms/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '🔥 js-algorithms',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/nejcm/js-algorithms',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/nejcm/js-algorithms',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nejc M. Built with Docusaurus.`,
    },
  },
};

module.exports = config;
