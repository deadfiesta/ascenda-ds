import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-designs",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config, { configType }) {
    config.base = process.env.BASE_PATH || config.base;

    // return the customized config
    return config;
  },
};
export default config;
