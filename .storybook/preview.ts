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
};


export default preview;
