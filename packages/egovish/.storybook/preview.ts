import '@egovish/tokens/variables.css';

import tokens from '@egovish/tokens';
import { Preview } from '@storybook/react';

import egovishDark from './themes/egovish-dark';
import egovishLight from './themes/egovish-light';

const preview: Preview = {
  parameters: {
    docs: {
      theme: egovishLight,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      dark: { ...egovishDark, appBg: tokens.color.palette.grayscale[90] },
      light: { ...egovishLight, appBg: tokens.color.palette.grayscale[10] },
      current: 'light',
      stylePreview: true,
    },
  },
};

export default preview;
