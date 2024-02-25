import { Preview, ReactRenderer } from '@storybook/react';
import '../styles/globals.css';
import { withThemeByClassName } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    decorators: [
       withThemeByClassName<ReactRenderer>({
         themes: {
           light: '',
           dark: 'dark',
         },
         defaultTheme: 'light',
       }),
      ]
  },
};

import { withThemeByDataAttribute } from '@storybook/addon-themes';

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];

export default preview;
