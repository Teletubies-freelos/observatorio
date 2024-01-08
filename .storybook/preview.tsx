import React from 'react'
import type { Preview } from "@storybook/react";

import {ThemeTogglerProvider} from '../src/providers/ThemeTogglerP'
import '../src/app/reset.css'

export const withMuiTheme = (Story) => (
  <ThemeTogglerProvider>
    <Story />
  </ThemeTogglerProvider>
);

const preview: Preview = {
  decorators:[withMuiTheme],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
