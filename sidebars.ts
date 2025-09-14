import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    { type: 'doc', id: '00-home', label: 'Home' },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['getting-started/quickstart'],
    },
    {
      type: 'category',
      label: 'Platform',
      items: [
        'platform/overview',
        'platform/data-ingestion',
        'platform/metrics',
        'platform/central-bank-data',
      ],
    },
    { type: 'doc', id: 'architecture-security-faq', label: 'Architecture & Security FAQ' },
  ],
};

export default sidebars;
