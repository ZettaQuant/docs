// docusaurus.config.ts
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';

const config: Config = {
  title: 'ZettaQuant Docs',
  tagline: 'AI-Native Financial Intelligence',
  url: 'https://docs.zettaquant.ai',
  baseUrl: '/',
  favicon: 'img/logo.svg',
  organizationName: 'zettaquant', // GitHub org/user
  projectName: 'docs',            // repo name
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // docs at root
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/zettaquant/docs/edit/main/',
          // showLastUpdateTime: true,
          // showLastUpdateAuthor: true,
        },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],

  themeConfig: {
    metadata: [{ name: 'theme-color', content: '#0B1220' }],
    navbar: {
      title: 'ZettaQuant Docs',
      logo: { alt: 'ZettaQuant', src: 'img/logo.svg' },
      items: [
        { to: '/', label: 'Docs', position: 'left' },
        { to: '/faq', label: 'FAQ', position: 'left' },
        { href: 'https://zettaquant.ai', label: 'zettaquant.ai', position: 'right' },
        { href: 'https://github.com/zettaquant/docs', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            { label: 'Overview', to: '/platform/overview' },
            { label: 'Data Ingestion', to: '/platform/data-ingestion' },
            { label: 'Metrics', to: '/platform/metrics' },
            { label: 'Central Bank Dataset', to: '/platform/central-bank-data' },
          ],
        },
        {
          title: 'Developers',
          items: [
            { label: 'Quickstart', to: '/getting-started/quickstart' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'Website', href: 'https://zettaquant.ai' },
            { label: 'Contact', href: 'mailto:contact@zettaquant.ai' },
            { label: 'Privacy Policy', href: 'https://www.zettaquant.ai/privacy-policy' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} ZettaQuant, Inc.`,
    },

    // Optional: replace with real DocSearch keys when ready
    // algolia: {
    //   appId: 'YOUR_APP_ID',
    //   apiKey: 'YOUR_SEARCH_API_KEY',
    //   indexName: 'zettaquant_docs',
    //   contextualSearch: true,
    // },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'json', 'sql'],
    },

    colorMode: { 
      defaultMode: 'light', 
      respectPrefersColorScheme: false,
      disableSwitch: true  // Completely disable the theme switcher
    },
  },
};

export default config;
