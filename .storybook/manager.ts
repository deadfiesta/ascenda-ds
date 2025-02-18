import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Ascenda Storybook",
    brandUrl: "https://ds.ascenda.design/",
    brandImage: "/Ascenda.svg",
    brandTarget: "_self",
  }),
});