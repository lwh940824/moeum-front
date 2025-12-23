import type { StorybookConfig } from '@storybook/react-vite';
import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

const pkgRoot = fileURLToPath(new URL("..", import.meta.url));

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  framework: "@storybook/react-vite",
  async viteFinal(baseConfig) {
    return {
      ...baseConfig,
      resolve: {
        ...baseConfig.resolve,
        alias: {
          ...(baseConfig.resolve?.alias ?? {}),
          "@moeum/ui": pkgRoot,
          "@moeum/ui/utils": path.join(pkgRoot, "src", "utils"),
          "@moeum/ui/utils/cn": path.join(pkgRoot, "src", "utils", "cn.ts"),
          "@": path.join(pkgRoot, "src"),
        },
      },
      css: {
        ...baseConfig.css,
        postcss: {
          plugins: [
            tailwindcss(),
            autoprefixer(),
          ],
        },
      },
    };
  }
};
export default config;
