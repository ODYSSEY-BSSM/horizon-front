import React from 'react';
import { Global } from '@emotion/react';
import { globalStyle } from '@horizon/design-system';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <Global styles={globalStyle} />
        <Story />
      </>
    ),
  ],
};

export default preview;
