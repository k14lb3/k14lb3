import { plugins as babelConfigPlugins } from './babel.config.js';

/** @type {Record<string, any>} */
export const plugins = {
  '@stylexjs/postcss-plugin': {
    include: ['src/**/*.{ts,tsx}'],
    babelConfig: {
      babelrc: false,
      parserOpts: {
        plugins: ['typescript', 'jsx'],
      },
      plugins: babelConfigPlugins,
    },
  },
  autoprefixer: {},
};
