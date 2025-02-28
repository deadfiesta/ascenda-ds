import type { Preview } from "@storybook/react";
import "../src/ascenda.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['System', ['Colors', 'Icons'], 'Components']
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globals: {
    a11y: {
      // Optional flag to prevent the automatic check
      manual: true,
    },
  },
};


export default preview;
