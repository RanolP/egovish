import path from 'node:path';

import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../docs/**/*.mdx', '../src/**/*.mdx'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    reactDocgen: false,
  },
  viteFinal: config => {
    const rule = { find: /~\/docs\/(.*)/, replacement: path.resolve(__dirname, '../docs/$1') };
    return {
      ...config,
      define: {
        ...config.define,
        'process.env.NODE_DEBUG': false,
      },
      resolve: {
        ...config.resolve,
        alias: [
          ...(Array.isArray(config.resolve?.alias)
            ? config.resolve.alias
            : Object.values(config.resolve?.alias ?? {}).map(([find, replacement]) => ({ find, replacement }))),
          rule,
        ],
      },
    };
  },
};

export default config;
